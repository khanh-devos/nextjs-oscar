import { Dispatch, SetStateAction, useContext } from "react"
import { ContextComponent, uniCountry } from "../App";

export default function Nation({
  country, setShowAll, setShowNation, setShowCity, setCity
  }:{
    country: String,
    setShowAll: Dispatch<SetStateAction<Boolean>>,
    setShowNation: Dispatch<SetStateAction<Boolean>>,
    setShowCity: Dispatch<SetStateAction<Boolean>>,
    setCity: Dispatch<SetStateAction<String>>,
  }){
  
    const data: any = useContext(ContextComponent);
    const uniqueCountries: Array<uniCountry> = data?.uniqueCountries;

    const current_country = uniqueCountries.find((item) => item.country === country);
    
    const handleClick = (city: String) => {
      setShowNation(false);
      setShowCity(true);
      setCity(city);
    }

  return (
    <div>
      <h2>Nation</h2>
      {
        current_country?.cities.map((city) => (
          <button type="button" onClick={() => handleClick(city)} className="w-full boder-solid border-2" >
            {city}
          </button>
        ))
      }
    </div>
  )
}