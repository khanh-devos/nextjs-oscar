import { Dispatch, SetStateAction } from "react";

export default function Cities({
  cities
  }: {
    cities: Array<String>,
    setNation: Dispatch<SetStateAction<Boolean>>,
    setCity: Dispatch<SetStateAction<Boolean>>,
  }){
    return (
      <div>
        <h2>Nation</h2>
      </div>
    )
  }