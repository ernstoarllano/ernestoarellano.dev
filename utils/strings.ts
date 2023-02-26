export const formatTags = (strings: string[]) => {
  return strings
    .map((string) => string.trim())
    .filter((string) => string.length > 0)
    .join(', ')
}