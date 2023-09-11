"use client";

import { createContext } from "react";


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

export const ContextContainer = createContext({})

export default function MyContext({ 
  nobelists, uniqueCountries
  } : {
   nobelists: Array<Nobel>,
   uniqueCountries: Array<uniCountry>
  }) {
  
  return (
    <div></div>
  )
}