import { Client } from "@notionhq/client";

export default defineEventHandler(async (event) => {
  // Get environment variables
  const config = useRuntimeConfig();
  const notionApiKey = config.notionApiKey;
  const notionVisitorsDsId = config.notionVisitorsDsId;

  try {
    // Get geolocation from Vercel headers (automatically provided)
    const headers = getHeaders(event);
    
    const country = headers["x-vercel-ip-country"] || "Unknown";
    const city = decodeURIComponent(headers["x-vercel-ip-city"] || "Unknown");
    
    // Initialize Notion client
    const notion = new Client({
      auth: notionApiKey,
    });

    const response = await notion.pages.create({
      parent: {
        data_source_id: notionVisitorsDsId,
      },
      properties: {
        Country: {
            title: [{ text: { content: country } }],
        },
        City: {
            rich_text: [{ text: { content: city } }],
        },
        Date: {
            date: { start: new Date().toISOString() },
        }
      },
    });

    return {
      success: true,
      country,
      city,
    };

  } catch (error: any) {
    console.error("Error logging visitor to Notion:", error);
    return {
      success: false,
      error: error.message,
    };
  }
});
