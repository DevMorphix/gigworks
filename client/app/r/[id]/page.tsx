"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { log } from "console";

export const runtime = 'edge';


export default function RedirectPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.id as string;

  const [seconds, setSeconds] = useState(4);

  useEffect(() => {
    if (!slug) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      router.push(`/${slug}`);
      console.log(`Redirecting to /${slug}`);
    }, 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimeout);
    };
  }, [slug, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      {/* Video Ad */}
      {/* <video
        src="/gigwork-ad.mp4"
        autoPlay
        muted
        playsInline
        className="w-64 rounded-xl shadow-lg mb-6"
      /> */}

      <h1 className="text-xl font-semibold">Powered by Gigwork</h1>
      <p className="text-gray-600 mt-2">
        Opening business profile in {seconds} seconds...
      </p>
    </div>
  );
}
