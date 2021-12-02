const BASE_API = 'https://swapi.dev/api/'

export async function getPeople(id) {
  const response = await fetch(`${BASE_API}people/${id}/`)
  return await response.json()
}

export default getPeople