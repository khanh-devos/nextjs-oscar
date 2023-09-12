import { Dispatch, SetStateAction, useContext } from "react";
import { ContextComponent, Nobel } from "../App";

export default function City({
  city, setShowCity, setShowNation
  }: {
    city: String,
    setShowNation: Dispatch<SetStateAction<Boolean>>,
    setShowCity: Dispatch<SetStateAction<Boolean>>,
  }){

    const data: any = useContext(ContextComponent);
    const nobelists: Array<Nobel> = data?.nobelists;

    const winners = nobelists.filter((item) => item.city === city )

    return (
      <div>
        <h2>Nation</h2>
        {
          winners.map((item) => (
            <div className={"w-full border-solid border-2"}>
              <h2>{item.fullname} : {item.city}</h2>
            </div>
          ))
        }

      </div>
    )
  }