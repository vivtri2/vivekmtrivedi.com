import { GraphQLClient, gql } from 'graphql-request'

const GET_COUNT = gql`
  query {
    visitor_counter(limit: 1) {
      id
      count
    }
  }
`

type VisitorCountResponse = {
  visitor_counter: {
    id: string
    count: number
  }[]
}

export default async (req: Request): Promise<Response> => {
  const client = new GraphQLClient(
    'https://hdgbxroolqohcvhunumg.hasura.us-east-1.nhost.run/v1/graphql',
    {
      headers: {
        'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET || ''
      }
    }
  )

  try {
    const res = await client.request<VisitorCountResponse>(GET_COUNT)
    const data = res.visitor_counter?.[0]

    return new Response(
      JSON.stringify({ count: data.count, id: data.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
