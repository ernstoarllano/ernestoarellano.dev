export const getDate = (publishedAt: string) => {
  const date = new Date(publishedAt).toLocaleString('default', {
    dateStyle: 'long',
  })

  return date
}
