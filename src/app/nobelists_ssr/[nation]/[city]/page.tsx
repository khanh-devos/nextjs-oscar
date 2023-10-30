import { getNobelists } from "@/app/ssr";
import { v4 } from "uuid";
import { Nobel, uniCountry } from "../../App";
import MyHeader from "../../Header";
import { takeUniqueCountries } from "../../page";

export default async function City ({
  params
} : {
  params: {
    city: string,
    nation: string
  }
}) {
  const { city, nation } = params;
  console.log(city.replace(/%2[C0]/gi, ""));

  const nobelists: Array<Nobel> = await getNobelists();
  const uniqueCountries: Array<uniCountry> = takeUniqueCountries(nobelists)

  const city_nobelists: Array<Nobel> = nobelists.filter((item) =>
    item.city === city
  )


  return (
    <div className="color-4">
      
      <MyHeader title="The City Nobels" stats="Nation break" country={nation} amount={city_nobelists.length} />

      {
        city_nobelists.map((item: Nobel, i: number) => {
          return (<h2 key={v4()}>
            {`${i+1}) ${item.fullname}`}
          </h2>)

        })
      }
    </div>
  )
}