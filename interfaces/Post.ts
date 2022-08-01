export interface Post {
  id: string
  attributes: {
    Title: string
    Body: string
    Slug: string
    publishedAt: string
    categories: {
      data: [
        {
          attributes: {
            Title: string
            Slug: string
          }
        }
      ]
    }
  }
}

export interface PostProps {
  title: string
  slug: string
  publishedAt: string
  categories: [
    {
      attributes: {
        Title: string
        Slug: string
      }
    }
  ]
}
