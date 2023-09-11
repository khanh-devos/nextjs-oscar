"use client";

import { createContext, useEffect, useState } from "react";
import AllNations from "./components/AllNations";
import Cities from "./components/Cities";
import Nation from "./components/Nation";


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
  
  const [showAll, setAll] = useState<Boolean>(true);
  const [showNation, setNation] = useState<Boolean>(false);
  const [showCities, setCity] = useState<Boolean>(false);
  const [country, setCountry] = useState<String>('');
  const [cities, setCities] = useState<Array<String>>(['']);


  useEffect(() => {

  }, [showAll, showNation, showCities])
  
  return (
    <ContextComponent.Provider value={{
      nobelists, uniqueCountries
    }}>
    {showAll &&  <AllNations setAll={setAll} setNation={setNation}/>}
    
    {showNation &&  <Nation country={country} setAll={setAll} setNation={setNation} setCity={setCity} />}
    
    {showCities &&  <Cities cities={cities} setNation={setNation} setCity={setCity} />} 
    </ContextComponent.Provider>
  )
}