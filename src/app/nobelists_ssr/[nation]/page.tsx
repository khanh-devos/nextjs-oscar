import { v4 } from "uuid";
import { getNobelists } from "@/app/ssr";
import Link from "next/link";
import { Nobel, uniCountry } from "../App";
import { takeUniqueCountries } from "../page";


export default async function Nation({
    params
}:{
    params: {nation: String}
}){
  const { nation } = params;
  const nobelists: Array<Nobel> = await getNobelists();
  const uniqueCountries: Array<uniCountry> = takeUniqueCountries(nobelists)

  const country: uniCountry | undefined = uniqueCountries.find(item => item.country === nation)

  return (
    <div>
      <h2>Nation: {country?.country}</h2>
      {
        country?.cities.map((city: String) => {
          const clean_city = city.replace(/\W/gi, '').toLowerCase()
          return (
          <Link key={v4()} href={`/nobelists_ssr/${country?.country}/${clean_city}`} >{city}</Link>
          )
        })
      }
    </div>
  )
}