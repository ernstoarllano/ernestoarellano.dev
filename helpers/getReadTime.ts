export const getReadTime = (content: string) => {
  const avgWordsPerMinute = 255
  const contentLength = content.trim().split(/\s+/).length

  return Math.ceil(contentLength / avgWordsPerMinute)
}
