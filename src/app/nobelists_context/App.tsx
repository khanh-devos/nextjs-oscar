"use client";

import { createContext, useEffect, useState } from "react";
import AllNations from "./components/AllNations";
import City from "./components/City";
import MyHeader from "./components/Header";
import Nation from "./components/Nation";
import ErrorBoundary from "../ErrorBoundary";


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


export type ContextValue = {
  nobelists: Array<Nobel>,
  uniqueCountries: Array<uniCountry>
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
  const [country, setCountry] = useState<String>('THE WORLD');
  const [city, setCity] = useState<String>('');

  const count_amount = () : Number => {
    if (showAll) return nobelists.length
    else if (showNation) {
      const current_country = uniqueCountries.find((item) => item.country === country);
      return current_country?.cities.length || 0
    }
    else if (showCities) {
      const winners = nobelists.filter((item) => item.city === city )
      return winners.length
    }
    else return 0
  }

  const statsTitle = (): Array<String> => {
    if (showAll) return ["The World Breakdown", "World Nobelists"]
    else if (showNation) return ["Nation Breakdown", "Nation Nobelists"]
    else if (showCities) return ["City Breakdown", "City Nobelists"]
    else return ["", ""]
  }
  
  return (
    <div className="color-1 p-0 min-h-screen">
    <ErrorBoundary>

    <ContextComponent.Provider value={{
      nobelists, uniqueCountries
    }}>
    <MyHeader 
      stats={statsTitle()[0]} 
      title={statsTitle()[1]}
      country={country} 
      amount={count_amount()}
      setShowAll={setShowAll}
      setShowNation={setShowNation}
      setShowCity={setShowCity}
      setCountry={setCountry}
    />

    {showAll &&  <AllNations setShowAll={setShowAll} setShowNation={setShowNation} setCountry={setCountry} />}
    
    {showNation &&  <Nation country={country} setShowAll={setShowAll} setShowNation={setShowNation} setShowCity={setShowCity} setCity={setCity} />}
    
    {showCities &&  <City country={country} city={city} />} 
    </ContextComponent.Provider>
    
    </ErrorBoundary>
    </div>
  )
}