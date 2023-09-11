import { getNobelists } from "@/app/ssr";
import { v4 } from "uuid";
import { Nobel, uniCountry } from "../../App";
import { takeUniqueCountries } from "../../page";

export default async function ({
  params
} : {
  params: {city: String}
}) {
  const { city } = params
  const nobelists: Array<Nobel> = await getNobelists();
  const uniqueCountries: Array<uniCountry> = takeUniqueCountries(nobelists)

  const city_nobelists: Array<Nobel> = nobelists.filter((item) =>
    item.city.replace(/\W/gi, '').toLowerCase() === city
  )


  return (
    <div>
      Nobelists in the city {city.toUpperCase()}
      {
        city_nobelists.map((item: Nobel, i: Number) => {
          return (<h2 key={v4()}>
            {`${i}) ${item.fullname}`}
          </h2>)

        })
      }
    </div>
  )
}