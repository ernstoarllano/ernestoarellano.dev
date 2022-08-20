import type { NextApiRequest, NextApiResponse } from 'next'
import { getPage } from 'services/getPage'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query
    const { content } = await getPage(Number(id))

    res.status(200).json(content)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

export default handler
