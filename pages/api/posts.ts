import type { NextApiRequest, NextApiResponse } from 'next'
import { getPosts } from 'services/getPosts'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { posts } = await getPosts()

    res.status(200).json(posts)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

export default handler
