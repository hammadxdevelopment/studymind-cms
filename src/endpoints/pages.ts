import type { Endpoint } from 'payload'

export const pagesEndpoint: Endpoint = {
  path: '/pages',
  method: 'get',
  handler: async (req) => {
    const payload = req.payload

    const pages = await payload.find({
      collection: 'pages',
    })

    return Response.json(pages)
  },
}
