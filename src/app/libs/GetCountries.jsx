
export default async function GetCountries() {

    const response = await fetch('https://restcountries.com/v3.1/all')

    if (!response.ok){
        throw new Error('failed to fetch countries data')
    }
  return response.json ()
}
