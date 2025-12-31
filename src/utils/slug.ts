export const normalizeSlug = (value?: string | null): string => {
  if (!value) return "";
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}