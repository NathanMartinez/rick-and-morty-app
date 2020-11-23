export async function queryFetch(query) {
  return await fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: query
    })
  }).then(res => res.json())
}