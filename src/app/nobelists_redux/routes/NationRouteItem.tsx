"use client";

import { useNavigate } from 'react-router-dom';


export default function NationRouteItem({ 
  city, count
 }:{
  city: String,
  count: Number
 }) {
  const navigate = useNavigate();
  const handleCity = () => {
    navigate(`${city}`);
  };

  return (
    <button type="button" onClick={handleCity} className="">
      
      <h3>{`${city} : ${count} nobelists`}</h3>
      
    </button>
  );
}
