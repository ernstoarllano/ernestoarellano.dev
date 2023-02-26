export interface Project {
  tag: string
  title: string
  description: string
  repo: string
  url: string
  image: string
  tags: string[]
  private: boolean
}

export interface ProjectProps {
  project: Project
}