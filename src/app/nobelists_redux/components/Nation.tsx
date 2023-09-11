"use client";


import NationItem from "./NationItem";
import { Nobel, uniCountry } from "../page";
import { useSelector } from "react-redux";



export default function Nation() {
  const { uniqueCountries } = useSelector((store: any) => store.nobel)

  return (

    <div className="nation">
      <h2>Nation</h2>

      {/* <MyHeader stats="Stats by country" title="World Nobel Winners" country="THE WORLD" amount={amount} /> */}

      <div className="nation-grid-container">
        {
        uniqueCountries.map((item: uniCountry, index:Number) => (
          <NationItem
            key={item.id.toString()}
            index={index}
            country={item.country}
            count={item.cities.length.toString()}
          />
        ))
        }
      </div>
    </div>

  );
}
