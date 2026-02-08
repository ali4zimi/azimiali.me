import { Client } from "@notionhq/client";

// Function to get client IP address
function getClientIp(event: any): string {
  // Try various headers in order of preference
  const headers = [
    'x-forwarded-for',
    'x-real-ip',
    'cf-connecting-ip', // Cloudflare
    'x-client-ip',
    'x-cluster-client-ip',
  ];

  for (const header of headers) {
    const value = getHeader(event, header);
    if (value) {
      // x-forwarded-for can contain multiple IPs, take the first one
      const ip = value.split(',')[0].trim();
      if (ip) return ip;
    }
  }

  // Fallback to request IP
  return event.node.req.socket.remoteAddress || 'unknown';
}

// Function to get geolocation data from IP
async function getGeolocation(ip: string) {
  try {
    // Skip localhost/private IPs
    if (ip === 'unknown' || ip === '::1' || ip === '127.0.0.1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
      return { country: 'Local', city: 'Development' };
    }

    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    
    if (!response.ok) {
      throw new Error('Geolocation API failed');
    }

    const data = await response.json();
    
    return {
      country: data.country_name || 'Unknown',
      city: data.city || 'Unknown',
    };
  } catch (error) {
    console.error('Error fetching geolocation:', error);
    return { country: 'Unknown', city: 'Unknown' };
  }
}

export default defineEventHandler(async (event) => {
  // Get environment variables
  const config = useRuntimeConfig();
  const notionApiKey = config.notionApiKey;
  const notionVisitorsDsId = config.notionVisitorsDsId;

  try {
    // Get client IP and geolocation
    const clientIp = getClientIp(event);
    const { country, city } = await getGeolocation(clientIp);
    
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
      ip: clientIp,
    };

  } catch (error: any) {
    console.error("Error logging visitor to Notion:", error);
    return {
      success: false,
      error: error.message,
    };
  }
});
