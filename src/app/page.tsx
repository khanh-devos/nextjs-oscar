import Nation from '../components/Nation';
import { getNobelists } from './ssr';


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


const takeUniqueCountries = (arr: any) => {
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


export default async function Home() {
  const nobelists: Array<Nobel> = await getNobelists();
  const uniqueCountries: Array<uniCountry> = takeUniqueCountries(nobelists)

  return (
    <div>
      <h2>Home</h2>
      <Nation nobelists={nobelists} uniqueCountries={uniqueCountries}/>
    </div>
  )
}
