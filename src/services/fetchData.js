export default async function fetchData (query) {
  let response = []

  try {
    response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IP_API_KEY}&ipAddress=${query.value}`)
  } catch (e) {
    return e
  }

  if (!response.ok) {
    const message = `Ha ocurrido un error: ${response.status}`
    throw new Error(message)
  }

  return await response.json()
}