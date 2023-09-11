"use client";

import { createContext } from "react";
import Nations from "./Nations";


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


export const ContextComponent = createContext({})


export default function MyApp({ 
  nobelists, uniqueCountries
  } : {
   nobelists: Array<Nobel>,
   uniqueCountries: Array<uniCountry>
  }) {
  
  return (
    <ContextComponent.Provider value={{
      nobelists, uniqueCountries
    }}>
      <Nations />
    </ContextComponent.Provider>
  )
}