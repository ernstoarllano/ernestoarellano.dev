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

export interface RepoProps {
  url: string
  homepageUrl?: string
  primaryLanguage: {
    name: string
  }
  name: string
  description: string
}

export interface ReposProps {
  repos: Repo[]
}
