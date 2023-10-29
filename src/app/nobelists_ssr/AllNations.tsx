"use client";

import IMAGES, { ArrowCircleRightIcon } from "@/container";
import Link from "next/link";
import { Nobel, uniCountry } from "./App";
import MyHeader from "./Header";
import Image from 'next/image';
import { v4 } from "uuid";


export default function Nations({
  uniqueCountries, nobelists
}:{
  uniqueCountries: Array<uniCountry>,
  nobelists: Array<Nobel>
}){

  const NUMBERS: Array<number> = [1,2, 5,6, 9,10, 13,14, 17,18]
  const darken = (index: number) => NUMBERS.includes(index) ? 'color-6': 'color-5' 

  
  return (
    <div>
      <MyHeader title="The World Nobels" stats="world break" country={'the world'} amount={nobelists.length} />

      <div className="grid grid-cols-2">
        {
        uniqueCountries.map(({country, cities}, index:number) => {
          
          return (
          <Link
            key={v4()}
            href={`/nobelists_ssr/${country}`} 
            className={`relative p-1 h-32 ${darken(index)}`} >
            
            <div className="absolute top-1 right-1 ">
              <ArrowCircleRightIcon />
            </div>
              
            <div className="absolute bottom-2 right-2 text-right">
              <strong className="text-sm">{country.toUpperCase()}</strong>
              <p className="text-sm">{cities.length}</p>
            </div>
            
            <Image 
              src={IMAGES[country.toLowerCase().replace(' ', '')].src}
              alt="nation map" 
              width={120}
              height={120}
              className="h-24 min-h-24 p-3 m-auto opacity-25"
            />
          </Link>)}
          )
        }
      </div>
    </div>
  )
}