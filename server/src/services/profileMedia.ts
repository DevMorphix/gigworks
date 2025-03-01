
import { count, eq, sql } from "drizzle-orm";
import { db } from '../config/database/turso';
import { profileMedia } from "../config/database/schema";



// Add profile media
export const addProfileMedia = async (data: ProfileMedia) => {
    return new Promise(async (resolve, reject) => {
        try {

            // SQL Query : INSERT INTO profile_media (profile_id, media_id, type) VALUES (profile_id, media_id, type)

            let result = await db.insert(profileMedia).values(data).returning();
            result = result[0];

            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}



// Remove profile media
export const removeProfileMedia = async (profileId: string, mediaId: string) => {
    return new Promise(async (resolve, reject) => {
        try {

            // SQL Query : DELETE FROM profile_media WHERE profile_id = profileId AND id = mediaId

            let result = await db
                .delete(profileMedia)
                .where(sql`profile_id = ${profileId} AND id = ${mediaId}`)
                .returning();
            
            result = result[0];

            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}
