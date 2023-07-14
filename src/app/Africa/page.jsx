import Image from "next/image"
import GetCountries from "../libs/GetCountries"

export default async function home() {

  const data = await GetCountries()

  const africa = data.filter(country => country.region === "Africa")

  const countries = africa.map(country =>(
    <article className="border-4 rounded-lg py-6 flex flex-col items-center justify-center border-sky-700 hover:shadow-2xl">
      <Image src={country.coatOfArms.svg} alt={country.name.common} width={250} height={250}/>
    <h2>{country.name.common}</h2>
  </article>
 ))
  
  return (
    <div>
  <h1 className="flex flex-col items-center h-[50px] justify-center m-4 bg-sky-600 text-white">africa countries</h1>
  <div className="grid grid-cols-3 gap-2 uppercase">
    {countries}
  </div>

  <footer className="flex flex-col items-center h-[50px] justify-center m-4 bg-sky-600 text-white">
    <p>{`we have ${countries.length} countries in Africa`}</p>
  </footer>
    </div>
  )
}

