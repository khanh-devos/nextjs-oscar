"use client";

import IMAGES, { ArrowCircleRightIcon } from "@/container";
import { Dispatch, SetStateAction, useContext } from "react";
import { v4 } from "uuid";
import { ContextComponent, Nobel, uniCountry } from "../App";

type BoolFunc = () => Boolean

export default function AllNations({
  setShowAll, setShowNation, setCountry
  }: {
  setShowAll: Dispatch<SetStateAction<Boolean>>,
  setShowNation: Dispatch<SetStateAction<Boolean>>,
  setCountry: Dispatch<SetStateAction<String>>
  }){

  const data: any = useContext(ContextComponent);
  const uniqueCountries: Array<uniCountry> = data?.uniqueCountries;
  
  const handleClick = (country: String) => {
    setShowAll(false);
    setShowNation(true);
    console.log(country);
    setCountry(country)
  }

  return (
    <div>

      {
      uniqueCountries.map((item, index:Number) => (
        <button key={v4()} onClick={() => handleClick(`${item.country}`)} type="button" className="w-full border-solid border-2">
          <ArrowCircleRightIcon />
          
          <img width={20} src={IMAGES[item.country.toLowerCase().replace(' ', '')].src} alt="nation map" className="" />
          
          <div className="">
            <h3>{item.country.toUpperCase()}</h3>
            <p>{item.cities.length}</p>
          </div>
          
        </button>))
      }

    </div>
  )
}