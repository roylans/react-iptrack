export default async function fetchData (query) {
  let response = []

  try {
    response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_NTVsG6OnhirJ96KWFQdoQvxf5ExHB&ipAddress=${query.value}`)
  } catch (e) {
    return e
  }

  if (!response.ok) {
    const message = `Ha ocurrido un error: ${response.status}`
    throw new Error(message)
  }

  return await response.json()
}