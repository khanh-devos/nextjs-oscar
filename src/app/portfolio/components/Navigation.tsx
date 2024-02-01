import { Dispatch, SetStateAction } from "react";
import { MyBtn1, MyLinearGradient } from "@/app/styledComponents";
import { v4 } from "uuid";
import Reflection from "../reflection/Reflecting";



const PAGESNAME = ['Home', 'Projects', 'Contact']

const Navigation = ({
  show,
  setShow
} : {
  show: Array<number>,
  setShow: Dispatch<SetStateAction<Array<number>>>
}) => {
  const handleCallback = (e: Event, num: number, index: number ): void => {
    const newShow = [0, 0, 0];
    newShow[index] = 1;
    setShow(newShow)

  }

  return (
  <div className="flex justify-end">
    <div className="fixed top-4 right-4 z-10">

    <Reflection angle={100} color='white' sideColor='black' borderRadius="5px">
      <MyLinearGradient stroke="lavender" color="rgba(0,0,0,0)" edgeColor="white" padding="0" >
        <div className="top-0 left-0 text-black flex flex-row gap-2 px-1 z-20">

        {
          show.map((num: number, index: number) => (
            <MyBtn1 
              key={v4()}
              text={PAGESNAME[index]} 
              callback={(e: Event) => handleCallback(e, num, index)} 
              style={num ? {
                textDecoration: 'underline',
                fontWeight: 'bold'
              }: {}}
            />
          ))
        }
        
        </div>
        
      </MyLinearGradient>
    </Reflection>  
    </div>
  </div>
  )
}

export default Navigation;