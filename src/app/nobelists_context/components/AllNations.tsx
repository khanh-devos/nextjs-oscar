"use client";

import IMAGES, { ArrowCircleRightIcon } from "@/container";
import { Dispatch, SetStateAction, useContext } from "react";
import { v4 } from "uuid";
import { ContextComponent, Nobel, uniCountry } from "../App";
import Image from 'next/image';

export default function AllNations({
  setShowAll, setShowNation, setCountry
  }: {
  setShowAll: Dispatch<SetStateAction<Boolean>>,
  setShowNation: Dispatch<SetStateAction<Boolean>>,
  setCountry: Dispatch<SetStateAction<String>>
  }){

  const data: any = useContext(ContextComponent);
  const uniqueCountries: Array<uniCountry> = data?.uniqueCountries;
  const nobelists: Array<Nobel> = data?.nobelists;
  
  const handleClick = (country: String) => {
    setShowAll(false);
    setShowNation(true);
    setCountry(country)
  }

  const NUMBERS: Array<number> = [1,2, 5,6, 9,10, 13,14, 17,18]
  const darken = (index: number) => NUMBERS.includes(index) ? 'color-3': 'color-2' 


  return (
    <div className="grid grid-cols-2">

      {
      uniqueCountries.map((item, i:number) => (
        <button 
          key={v4()} 
          onClick={() => handleClick(`${item.country}`)}
          className={`relative p-1 h-32 ${darken(i)}`} >
          <div className="absolute top-1 right-1 ">
            <ArrowCircleRightIcon />
          </div>
            
          <div className="absolute bottom-2 right-2 text-right">
            <strong className="text-sm">{item.country.toUpperCase()}</strong>
            <p className="text-sm">{item.cities.length}</p>
          </div>
          
          <Image 
            src={IMAGES[item.country.toLowerCase().replace(' ', '')].src}
            width={120}
            height={120}
            alt="nation map" 
            className="h-24 min-h-24 p-3 m-auto opacity-25"
          />
          
          
        </button>))
      }

    </div>
  )
}