import React from 'react'

interface Repo {
  id: string
  name: string
  description: string
  url: string
  primaryLanguage: {
    name: string
  }
  homepageUrl?: string
}

interface Job {
  id: number
  company: string
  location: string
  title: string
  date: string
  description: string
}

interface Project {
  id: string
  attributes: {
    Tag: string
    Title: string
    Description: string
    Thumbnail: {
      data: {
        attributes: {
          url: string
        }
      }
    }
    Website: string
    Tech: string
  }
}

export interface LocaleTime {
  hour?: string
  minute?: string
  seconds?: string
  period?: string
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

export interface BlogProps {
  posts: Post[]
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

export interface HomePageProps {
  content: string
  projects: Project[]
}

export interface PostPageProps {
  post: {
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
  content: string
}

export interface IntroProps {
  content?: string
}

export interface JobProps {
  id: number
  company: string
  location: string
  title: string
  date: string
  description: string
}

export interface TimelineProps {
  jobs: Job[]
}

export interface ProjectsProps {
  projects: Project[]
}

export interface ProjectProps {
  tag: string
  title: string
  description: string
  thumbnail: string
  website: string
  tech: string
}

export interface HamburgerProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
