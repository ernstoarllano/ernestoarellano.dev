export const getImageURL = (thumbnail: string) => {
  return `${process.env.strapiURI}${thumbnail}`
}
