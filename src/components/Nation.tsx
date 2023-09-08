"use client";

// import MyHeader from './Header';
import { Nobel, uniCountry } from "@/app/page";
import NationItem from "./NationItem";


// import NationItem from './NationItem';

export default function Nation({
  nobelists, uniqueCountries}
  : {
    nobelists: Array<Nobel>,
    uniqueCountries: Array<uniCountry>
  }) {

  return (
    <div className="nation">
      <h2>Nation</h2>

      {/* <MyHeader stats="Stats by country" title="World Nobel Winners" country="THE WORLD" amount={amount} /> */}

      <div className="nation-grid-container">
        {
        uniqueCountries.map(({id, country, cities}, index) => (
          <NationItem
            key={id.toString()}
            index={index}
            country={country}
            count={cities.length.toString()}
          />
        ))
        }
      </div>
    </div>
  );
}
