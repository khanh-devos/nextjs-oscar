import { ArrowCircleRightIcon } from "@/container";
import { Dispatch, SetStateAction, useContext } from "react"
import { v4 } from "uuid";
import { ContextComponent, Nobel, uniCountry } from "../App";
import MyHeader from "./Header";

interface Dictionary<T> {
  [key: string]: T;
}

type Cities = Record<string, Number>;

export default function Nation({
  country, setShowAll, setShowNation, setShowCity, setCity
  }:{
    country: String,
    setShowAll: Dispatch<SetStateAction<Boolean>>,
    setShowNation: Dispatch<SetStateAction<Boolean>>,
    setShowCity: Dispatch<SetStateAction<Boolean>>,
    setCity: Dispatch<SetStateAction<String>>,
  }){
  
    const data: any = useContext(ContextComponent);
    const uniqueCountries: Array<uniCountry> = data?.uniqueCountries;

    const current_country = uniqueCountries.find((item) => item.country === country);
    
    const uniqueCitySet = Array.from(new Set(current_country?.cities))
    const uniqueCity = new Map(
      uniqueCitySet.map((item) => {
        return [item, 0]
      })  
    );

    current_country?.cities.forEach((item) => {
      uniqueCity.set(item, Number(uniqueCity.get(item)) + 1);
    });

    const handleClick = (city: String) => {
      setShowNation(false);
      setShowCity(true);
      setCity(city);
    }

  return (
    <div className="grid grid-cols-1">
      {
        Array.from(uniqueCity.entries()).map(([key, value], i) => (
          <button 
            key={v4()}
            type="button"
            onClick={() => handleClick(key)}
            className={`text-left p-1 grid grid-cols-2 ${i%2!==0 ? 'color-3': 'color-2'}`}
          >
            <strong className="mt-7 mb-7 text-sm">{key.toUpperCase()}</strong>
            <strong className="mt-7 mb-7 text-sm flex flex-rows-1 justify-end">
              {`${value} Nobelist${value > 1 ? 's' : ''}`}
              <div className="ml-5">
              <ArrowCircleRightIcon />  
              </div>
            </strong>
            
          </button>
        ))
      }
    </div>
  )
}