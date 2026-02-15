import { Client } from "@notionhq/client";

export default defineEventHandler(async (event) => {
  // Get environment variables
  const config = useRuntimeConfig();
  const notionApiKey = config.notionApiKey;
  const notionVisitorsDsId = config.notionVisitorsDsId;

  try {
    const body = await readBody(event);
    const page = body?.page || "Unknown";
    
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
        Page: {
            rich_text: [{ text: { content: page } }],
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
      page,
    };

  } catch (error: any) {
    console.error("Error logging visitor to Notion:", error);
    return {
      success: false,
      error: error.message,
    };
  }
});
