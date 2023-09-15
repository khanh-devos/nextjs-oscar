import { Dispatch, SetStateAction, useContext } from "react";
import { v4 } from "uuid";
import { ContextComponent, Nobel } from "../App";

export default function City({
  country, city
  }: {
    country: String,
    city: String
  }){

    const data: any = useContext(ContextComponent);
    const nobelists: Array<Nobel> = data?.nobelists;

    const winners = nobelists.filter((item) => item.city === city )

    return (
      <div>
        <h2>Nation</h2>

        {
          winners.map((item) => (
            <div key={v4()} className={"w-full border-solid border-2"}>
              <h2>{item.fullname} : {item.city}</h2>
            </div>
          ))
        }

      </div>
    )
  }