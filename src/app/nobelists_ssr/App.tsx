"use client";

import Nations from "./AllNations";


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


export default function MyApp({ 
  nobelists, uniqueCountries
  } : {
   nobelists: Array<Nobel>,
   uniqueCountries: Array<uniCountry>
  }) {
  
  return (
    <div>
      
      <Nations uniqueCountries={uniqueCountries} nobelists={nobelists} />
    </div>
  )
}