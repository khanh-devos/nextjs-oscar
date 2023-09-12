"use client";

import { createContext, useEffect, useState } from "react";
import AllNations from "./components/AllNations";
import City from "./components/City";
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
  
  const [showAll, setShowAll] = useState<Boolean>(true);
  const [showNation, setShowNation] = useState<Boolean>(false);
  const [showCities, setShowCity] = useState<Boolean>(false);
  const [country, setCountry] = useState<String>('');
  const [city, setCity] = useState<String>('');


  useEffect(() => {

  }, [showAll, showNation, showCities])
  
  return (
    <ContextComponent.Provider value={{
      nobelists, uniqueCountries
    }}>
    {showAll &&  <AllNations setShowAll={setShowAll} setShowNation={setShowNation} setCountry={setCountry} />}
    
    {showNation &&  <Nation country={country} setShowAll={setShowAll} setShowNation={setShowNation} setShowCity={setShowCity} setCity={setCity} />}
    
    {showCities &&  <City city={city} setShowNation={setShowNation} setShowCity={setShowCity} />} 
    </ContextComponent.Provider>
  )
}