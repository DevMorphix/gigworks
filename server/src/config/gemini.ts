import { Env } from "hono";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { cleanUpContent } from "../utils/helpers";
import type { Bindings } from "../index";

const RETRY_LIMIT = 3;
const RETRY_DELAY_MS = 1000;

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

export const queryCloudflareAI = async (
  message: string,
  env: Bindings
): Promise<string> => {
  const response = await env.AI.run("@cf/meta/llama-3.3-70b-instruct-fp8-fast", {
    messages: [
      {
        role: "system",
        content: `You are a service classifier. You MUST always return exactly 3 services as a raw JSON array, no markdown, no explanation.`
      },
      {
        role: "user",
        content: message
      }
    ],
    max_tokens: 256
  });

  if (Array.isArray(response.response)) {
    return JSON.stringify(response.response);
  }

  return response.response ?? "";
};

export const queryGeminiService = async (
  message: string,
  env: Env
): Promise<string> => {
  const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  let lastError: unknown;

  for (let attempt = 1; attempt <= RETRY_LIMIT; attempt++) {
    try {
      const result = await model.generateContent([message]);

      const candidate = result.response?.candidates?.[0]?.content?.parts?.[0];

      if (!candidate || typeof candidate.text !== "string") {
        throw new Error("Invalid response from Gemini: missing or malformed candidate");
      }

      return cleanUpContent(candidate.text);

    } catch (error: any) {
      lastError = error;

      const isRetryable =
        error?.status === 429 ||
        error?.status === 408 ||
        error?.message?.includes("429") ||
        error?.message?.includes("408");

      if (!isRetryable || attempt === RETRY_LIMIT) {
        break;
      }

      // Exponential backoff: 1s, 2s, 4s
      const delay = RETRY_DELAY_MS * 2 ** (attempt - 1);
      console.warn(`Gemini attempt ${attempt} failed (${error?.status ?? error?.message}). Retrying in ${delay}ms...`);
      await sleep(delay);
    }
  }

  console.error("Gemini service failed after retries:", lastError);
  throw lastError;
};