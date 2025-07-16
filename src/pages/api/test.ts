import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
  timestamp?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const method = req.method

  switch (method) {
    case 'GET':
      res.status(200).json({
        message: 'This is a GET request',
        timestamp: new Date().toISOString(),
      })
      break

    case 'POST':
      // For example, you could read the body here: req.body
      res.status(200).json({
        message: 'This is a POST request',
        timestamp: new Date().toISOString(),
      })
      break

    case 'PUT':
      res.status(200).json({
        message: 'This is a PUT request',
        timestamp: new Date().toISOString(),
      })
      break

    case 'DELETE':
      res.status(200).json({
        message: 'This is a DELETE request',
        timestamp: new Date().toISOString(),
      })
      break

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).json({ message: `Method ${method} Not Allowed` })
  }
}
