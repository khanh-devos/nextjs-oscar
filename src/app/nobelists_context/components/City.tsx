import { useContext } from "react";
import { v4 } from "uuid";
import { ContextComponent, Nobel } from "../App";

export default function City({
  city
}:{
  city: String
}){

    const data: any = useContext(ContextComponent);
    const nobelists: Array<Nobel> = data?.nobelists;

    const winners = nobelists.filter((item) => item.city === city )

    return (
      <div>

        {
          winners.map((item, i) => (
            <div key={v4()} className={"w-full"}>
              <h2 className={`pl-1 pt-5 pb-5 text-sm ${i%2 === 0 ? 'color-2':'color-3'}`}>{`- ${item.fullname}`}</h2>
            </div>
          ))
        }

      </div>
    )
  }