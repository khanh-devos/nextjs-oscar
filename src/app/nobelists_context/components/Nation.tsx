import { Dispatch, SetStateAction } from "react"

export default function Nation({
  country, setAll, setNation, setCity
  }:{
    country: String,
    setAll: Dispatch<SetStateAction<Boolean>>,
    setNation: Dispatch<SetStateAction<Boolean>>,
    setCity: Dispatch<SetStateAction<Boolean>>,
  }){
  return (
    <div>
      <h2>Nation</h2>
    </div>
  )
}