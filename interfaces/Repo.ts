export interface Repo {
  id: string
  name: string
  description: string
  url: string
  primaryLanguage: {
    name: string
  }
  homepageUrl?: string
}
