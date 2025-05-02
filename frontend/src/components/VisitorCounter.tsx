// components/VisitorCounter.tsx
import React, { useEffect, useState } from 'react'
import { nhost } from '../lib/nhost'
import { gql } from 'graphql-request'

const GET_COUNT = gql`
  query {
    visitor_counter(limit: 1) {
      count
      id
    }
  }
`

const INCREMENT_COUNT = gql`
  mutation($id: uuid!, $newCount: Int!) {
    update_visitor_counter_by_pk(pk_columns: {id: $id}, _set: {count: $newCount}) {
      count
    }
  }
`
const res = await nhost.graphql.request(GET_COUNT)
const data = res.data.visitor_counter[0]

console.log(data.id, data.count)

// const VisitorCounter = () => {
//   const [count, setCount] = useState(0)
//   const [id, setId] = useState<string | null>(null)

//   useEffect(() => {
//     const fetchCount = async () => {
//       const res = await nhost.graphql.request(GET_COUNT)
//       const data = res.data.visitor_counter[0]
//       setCount(data.count)
//       setId(data.id)

//       // Only increment once per session
//       if (!sessionStorage.getItem('visited') && data.id) {
//         const newCount = data.count + 1
//         await nhost.graphql.request(INCREMENT_COUNT, {
//           id: data.id,
//           newCount
//         })
//         setCount(newCount)
//         sessionStorage.setItem('visited', 'true')
//       }
//     }

//     fetchCount()
//   }, [])

//   return (
//     <button
//       className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
//     >
//       Visitor Count: {count ?? '...'}
//     </button>
//   )
// }

export default VisitorCounter
