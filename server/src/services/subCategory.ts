import { count, eq, sql } from "drizzle-orm";
import { db } from "../config/database/turso";
import { subCategory, subCategoryOption } from "../config/database/schema";

// Create a new sub-category
export const createSubCategory = async (name: string, category_id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      // SQL Query : INSERT INTO sub_category (name, category_id) VALUES (name, category_id) RETURNING *

      let result = await db
        .insert(subCategory)
        .values({ name, category_id })
        .returning();
      result = result[0];

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

// Get all categories
export const getCategories = async (
  page: number,
  limit: number,
  search: string,
  status?: string
) => {
  return new Promise(async (resolve, reject) => {
    try {
      // SQL Query : SELECT id, name FROM sub_category WHERE name LIKE '%search%' LIMIT limit OFFSET (page - 1) * limit

      const result = await db
        .select({
          id: subCategory.id,
          name: subCategory.name,
          status:
            sql`CASE WHEN ${subCategory.status} = 1 THEN true ELSE false END`.mapWith(
              Boolean
            ),
        })
        .from(subCategory)
        .where(
          status === "all"
            ? sql`${subCategory.name} LIKE ${"%" + search + "%"}`
            : sql`${subCategory.name} LIKE ${"%" + search + "%"} AND ${
                subCategory.status
              } = 1`
        )
        .limit(limit)
        .offset((page - 1) * limit);

      resolve({
        data: result,
        count: await db.$count(subCategory),
      });
    } catch (error) {
      reject(error);
    }
  });
};

// Get a sub-category by id
export const getSubCategoryById = async (id: string, status?: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const results = await db
        .select({
          subCategoryId: subCategory.id,
          subCategoryName: subCategory.name,
          subCategoryOptionId: subCategoryOption.id,
          subCategoryOptionName: subCategoryOption.name,
          status:
            sql`CASE WHEN ${subCategoryOption.status} = 1 THEN true ELSE false END`.mapWith(
              Boolean
            ),
        })
        .from(subCategory)
        .leftJoin(
          subCategoryOption,
          sql`${subCategoryOption.sub_category_id} = ${subCategory.id}`
        )
        .where(
          status === "all"
            ? sql`${subCategory.id} = ${id}`
            : sql`${subCategory.id} = ${id} AND ${subCategory.status} = 1 AND ${subCategoryOption.status} = 1`
        );

      const subCategoryResult =
        results.length > 0
          ? {
              id: results[0].subCategoryId,
              name: results[0].subCategoryName,
            }
          : null;

      const subCategoryOptionResults = results.map((result) => ({
        id: result.subCategoryOptionId,
        name: result.subCategoryOptionName,
        status: result.status,
      }));

      resolve({
        subCategory: subCategoryResult,
        subCategoryOption: subCategoryOptionResults,
      });
    } catch (error) {
      reject(error);
    }
  });
};

// Update a sub-category
export const updateSubCategory = async (id: string, name: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      // SQL Query : UPDATE sub_category SET name = name, updated_at = NOW() WHERE id = id RETURNING *

      let result = await db
        .update(subCategory)
        .set({ name, updated_at: sql`(CURRENT_TIMESTAMP)` })
        .where(eq(subCategory.id, id))
        .returning();

      result = result[0];

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const updateSubCategoryStatus = async (id: string, status: number) => {
  return new Promise(async (resolve, reject) => {
    try {
      // SQL Query : UPDATE sub_category SET name = name, updated_at = NOW() WHERE id = id RETURNING *

      let result = await db
        .update(subCategory)
        .set({ status, updated_at: sql`(CURRENT_TIMESTAMP)` })
        .where(eq(subCategory.id, id))
        .returning();

      result = result[0];

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

// Delete a sub-category
export const deleteSubCategory = async (id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      // SQL Query : UPDATE sub_category SET status = 0 WHERE id = id

      await db
        .update(subCategory)
        .set({ status: 0, updated_at: sql`(CURRENT_TIMESTAMP)` })
        .where(eq(subCategory.id, id));

      // Todo : After deleting the category, we need to soft delete all the sub categories and sub category options associated with this category

      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
