export const getCategory = (categories: any) => {
  if (!categories) return

  if (categories.length > 1) {
    throw new Error('Need to handle multiple categories')
  } else {
    if (categories[0]) {
      return categories[0].attributes.Title
    }

    return
  }
}
