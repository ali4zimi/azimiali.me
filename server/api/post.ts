import { Client } from "@notionhq/client";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const notionApiKey = config.notionApiKey;
    
    // Get post ID from query parameters
    const query = getQuery(event);
    const postId = query.id as string;

    if (!postId) {
        throw createError({
            statusCode: 400,
            statusMessage: "Post ID is required",
        });
    }

    const notion = new Client({
        auth: notionApiKey,
    });

    try {
        // Fetch the specific page/post from Notion
        const post = await notion.pages.retrieve({
            page_id: postId,
        });

        // Optionally, fetch the page content (blocks)
        const blocks = await notion.blocks.children.list({
            block_id: postId,
        });

        return {
            success: true,
            post: post,
            blocks: blocks.results,
        };
    } catch (error: any) {
        console.error("Error fetching post from Notion:", error);
        throw createError({
            statusCode: 404,
            statusMessage: error.message || "Post not found",
        });
    }
});
