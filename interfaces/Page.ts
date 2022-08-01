import { Post } from 'interfaces/Post'
import { Repo } from 'interfaces/Repo'

export interface HomeProps {
  repos: Repo[]
  posts: Post[]
}

export interface PostProps {
  post: Post
}
