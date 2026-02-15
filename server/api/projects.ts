import { Client } from "@notionhq/client";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const notionApiKey = config.notionApiKey;
  const notionProjectsDsId = config.notionProjectsDsId;

  const notion = new Client({
    auth: notionApiKey,
  });

  try {
    const projects = await notion.dataSources.query({
      data_source_id: notionProjectsDsId,
      filter: {
		property: "status",
		status: {
          equals: "Done"
        }
      }
    });

    return { 
      success: true, 
      projects: projects.results,
      total: projects.results.length 
    };
  } catch (error: any) {
    console.error("Error fetching projects from Notion:", error);
    return {
      success: false,
      error: error.message,
      projects: [],
    };
  }
});
