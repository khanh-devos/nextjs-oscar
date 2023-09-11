"use client";

import Link from 'next/link';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import IMAGES, { ArrowCircleRightIcon } from '../../../container';
import { NationContext } from './MyApp';


export type uniCountry = {
  id: Number,
  country: String,
  cities: Array<String>
}

export type Nobel = {
  id: number, 
  fullname: string, 
  gender: string, 
  date: string, 
  city: string, 
  country: string, 
  awardYear: string, 
  category: string, 
  prize: string,
}


export default function NationItem({ 
  country, count, index 
  } : {
  country: String, count: String, index: Number
  }
) {
  
  const { nobelists, uniqueCountries } = useSelector((store: any) => store.nobel)

  const arr: Array<Number> = [0, 3, 4, 7, 8, 11, 12, 15, 16, 19, 20, 23];
  const style = arr.includes(index)
    ? { background: '#ec4c8b' }
    : { };


  return (
    <Link href={`/nobelists_redux/${country}`} className="">
      <ArrowCircleRightIcon />
      
      {/* <img width={20} src={IMAGES[country.toLowerCase().replace(' ', '')].src} alt="nation map" className="" /> */}
      
      <div className="nation-item-text">
        <h3>{country.toUpperCase()}</h3>
        <p>{count}</p>
      </div>
    </Link>
  );
}

