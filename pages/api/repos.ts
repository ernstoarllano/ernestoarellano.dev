import type { NextApiResponse } from 'next'
import { getRepos } from 'services/getRepos'

const handler = async (res: NextApiResponse) => {
  try {
    const { repos } = await getRepos()

    res.status(200).json(repos)
  } catch (err) {
    console.error(err)
  }
}

export default handler
