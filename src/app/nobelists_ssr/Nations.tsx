"use client";

import Link from "next/link";
import { useContext } from "react";
import { ContextComponent, Nobel, uniCountry } from "./App";


export default function Nations(){

  const data: any = useContext(ContextComponent);
  const uniqueCountries: Array<uniCountry> = data?.uniqueCountries;
  

  return (
    <div>
        {
        uniqueCountries.map(({country, cities}, index:Number) => (
          <Link href={`/nobelists_ssr/${country}`} className="">
            {/* <ArrowCircleRightIcon /> */}
            
            {/* <img width={20} src={IMAGES[country.toLowerCase().replace(' ', '')].src} alt="nation map" className="" /> */}
            
            <div className="">
              <h3>{country.toUpperCase()}</h3>
              <p>{cities.length}</p>
            </div>
          </Link>))
        }

    </div>
  )
}