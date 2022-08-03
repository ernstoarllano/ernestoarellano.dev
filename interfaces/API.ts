export interface Post {
  __typename: 'BlogEntity'
  id: string
  attributes: {
    __typename: 'Blog'
    Title: string
    Slug: string
    publishedAt: string
    categories: {
      __typename: 'CategoryRelationResponseCollection'
      data: [
        {
          __typename: 'CategoryEntity'
          attributes: {
            __typename: 'Category'
            Title: string
            Slug: string
          }
        }
      ]
    }
  }
}
