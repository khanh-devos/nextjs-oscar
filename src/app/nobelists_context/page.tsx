import { getNobelists } from "../ssr";
import MyApp from "./App";


export type uniCountry = {
  id: Number,
  country: String,
  cities: Array<String>
}

export type Nobel = {
  id: number, 
  fullname: string, 
  gender: string, 
  date: string, 
  city: string, 
  country: string, 
  awardYear: string, 
  category: string, 
  prize: string,
}


export const takeUniqueCountries = (arr: Array<Nobel>) => {
  const uniqueCountries: Array<uniCountry> = [];
  const compare: Array<string> = [];

  arr.forEach(({ country, id, city }: any) => {
    if (!compare.includes(country)) {
      compare.push(country);
      uniqueCountries.push({ id, country, cities: [city] });
    } else {
      const check: any = uniqueCountries.find((item) => item.country === country);
      check.cities.push(city);
    }
  });
  return uniqueCountries;
};


export default async function Nobelist() {
  const nobelists: Array<Nobel> = await getNobelists();
  const uniqueCountries: Array<uniCountry> = takeUniqueCountries(nobelists)

  console.log('running page at sever-side')

  return (
    <div>
      <h2>Home</h2>
      <MyApp nobelists={nobelists} uniqueCountries={uniqueCountries} />
    </div>
  )
}
