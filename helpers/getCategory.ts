export const getCategory = (categories: any) => {
  if (categories.length > 1) {
    throw new Error('Need to handle multiple categories')
  } else {
    return categories[0].attributes.Title
  }
}
