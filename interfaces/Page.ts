import { Repo } from 'interfaces/GitHub'
import { Post } from 'interfaces/Post'

export interface HomePageProps {
  content: string
  repos: Repo[]
  posts: Post[]
}
