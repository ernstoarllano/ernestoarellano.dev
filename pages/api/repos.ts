import type { NextApiRequest, NextApiResponse } from 'next'
import { getRepos } from 'services/getRepos'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { repos } = await getRepos()

    res.status(200).json(repos)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

export default handler
