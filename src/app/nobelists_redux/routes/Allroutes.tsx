"use client"

import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Nation from '../components/Nation';
import { uniCountry } from '../page';
import NationRoute from './NationRoute';

export default function Allroutes() {
  'use client'
  const { uniqueCountries } = useSelector((store: any) => store.nobel);

  return (
    // <BrowserRouter >
    <BrowserRouter basename='nobelists_redux'>
      <Routes>
        <Route path="/" element={<Nation />} />
        <Route path="/USA" element={<NationRoute country={'USA'} />} />

        {
            uniqueCountries.map((item: uniCountry) => {
              const r1 = [
                <Route
                  key={uuidv4()}
                  path={`${item.country}`}
                  element={<NationRoute country={item.country} />}
                />,
              ];

              // item.cities.forEach((city) => (
              //   r1.push(<Route
              //     key={uuidv4()}
              //     path={`/${item.country}/${city}`}
              //     element={<CityRoute city={city} country={item.country} />}
              //   />)));

              return r1;
            })
        }
      </Routes>
    </BrowserRouter>
  );
}
