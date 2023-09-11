"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useContext } from "react";
import { ContextComponent, Nobel, uniCountry } from "../App";

type BoolFunc = () => Boolean

export default function AllNations({
  setAll, setNation }: {
  setAll: Dispatch<SetStateAction<Boolean>>,
  setNation: Dispatch<SetStateAction<Boolean>>
  }){

  const data: any = useContext(ContextComponent);
  const uniqueCountries: Array<uniCountry> = data?.uniqueCountries;
  
  const handleClick = () => {
    
  }

  return (
    <div>
        {
        uniqueCountries.map(({country, cities}, index:Number) => (
          <div>
          <button onClick={handleClick} type="button" className="">
            {/* <ArrowCircleRightIcon /> */}
            
            {/* <img width={20} src={IMAGES[country.toLowerCase().replace(' ', '')].src} alt="nation map" className="" /> */}
            
            <div className="">
              <h3>{country.toUpperCase()}</h3>
              <p>{cities.length}</p>
            </div>
            
          </button>
          </div>))
        }

    </div>
  )
}