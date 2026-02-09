// Composable to manage post slug to ID mappings
export const usePostSlugMapping = () => {
  const STORAGE_KEY = 'post-slug-mapping';

  // Get slug-to-ID mapping from session storage
  const getMapping = (): Record<string, string> => {
    if (process.client) {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    }
    return {};
  };

  // Save slug-to-ID mapping to session storage
  const setMapping = (slug: string, postId: string) => {
    if (process.client) {
      const mapping = getMapping();
      mapping[slug] = postId;
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(mapping));
    }
  };

  // Save multiple mappings at once
  const setMappings = (mappings: Record<string, string>) => {
    if (process.client) {
      const existing = getMapping();
      const updated = { ...existing, ...mappings };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
  };

  // Get post ID by slug
  const getPostIdBySlug = (slug: string): string | null => {
    const mapping = getMapping();
    return mapping[slug] || null;
  };

  // Create slug from title
  const createSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  return {
    getMapping,
    setMapping,
    setMappings,
    getPostIdBySlug,
    createSlug,
  };
};
