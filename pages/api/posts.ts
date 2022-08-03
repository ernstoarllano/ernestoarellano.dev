import { Post } from 'interfaces/API'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getPosts } from 'services/getPosts'

const handler = async (req: NextApiRequest, res: NextApiResponse<Post>) => {
  try {
    const { posts } = await getPosts()

    res.status(200).json(posts)
  } catch (err) {
    console.error(err)
  }
}

export default handler
