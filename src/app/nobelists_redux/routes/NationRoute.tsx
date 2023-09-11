"use client"

import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import NationRouteItem from './NationRouteItem';

export default function NationRoute({ country }:{country:String}) {
  const { uniqueCountries } = useSelector((store: any) => store.nobel);
  const { cities } = uniqueCountries.find((item: any) => item.country === country);
  const uniqueCity: any = {};
  cities.forEach((item: any) => {
    if (!uniqueCity[item]) uniqueCity[item] = 1;
    else uniqueCity[item] += 1;
  });

  console.log('uniqueCity');

  return (
    <div className="">
      
      {/* <MyHeader stats="City breakdown" title="country nobel winners" country={country} amount={cities.length} /> */}

      <div className="">
        {
        Object.keys(uniqueCity).map((city) => (
          <NationRouteItem key={uuidv4()} city={city} count={uniqueCity[city]} />
        ))
      }
      </div>
    </div>
  );
}
