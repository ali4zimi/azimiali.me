import { Client } from "@notionhq/client";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const notionApiKey = config.notionApiKey;
    const notionPostsDsId = config.notionPostsDsId;

    const notion = new Client({
        auth: notionApiKey,
    });

    try {
        const posts = await notion.dataSources.query({
            data_source_id: notionPostsDsId,
            filter: {
                property: "status",
                select: {
                    equals: "published"
                }
            }
        });
        return {
            success: true,
            posts: posts.results,
            total: posts.results.length,
        };
    } catch (error: any) {
        console.error("Error fetching posts from Notion:", error);
        return {
            success: false,
            error: error.message,
            posts: [],
        };
    }
});