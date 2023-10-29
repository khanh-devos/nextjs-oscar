import { v4 } from "uuid";
import { getNobelists } from "@/app/ssr";
import Link from "next/link";
import { Nobel, uniCountry } from "../App";
import { takeUniqueCountries } from "../page";
import MyHeader from "../Header";


export default async function Nation({
    params
}:{
    params: {nation: string}
}){
  const { nation } = params;
  const nobelists: Array<Nobel> = await getNobelists();
  const uniqueCountries: Array<uniCountry> = takeUniqueCountries(nobelists)

  const country: uniCountry | undefined = uniqueCountries.find(item => item.country === nation.replace('%20', ' '))

  return (
    <div className="color-4">
      <MyHeader title="The Nation Nobels" stats="Nation break" country={nation} amount={country?.cities.length} />

      <div className="grid grid-cols-1">
      {
        country?.cities.map((city: String, i:number) => {
          
          return (
          <Link 
            key={v4()}
            href={{
              pathname: `/nobelists_ssr/${nation}/${city}`,
              query: {
                nation: nation
              }
            }}
            className={`text-left p-1 grid grid-cols-2 ${i%2!==0 ? 'color-6': 'color-5'}`}
          >{`${i+1}) ${city}`}</Link>
          )
        })
      }
      </div>
    </div>
  )
}