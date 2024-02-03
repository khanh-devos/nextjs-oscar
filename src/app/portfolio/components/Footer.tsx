import { MyLinearGradient, MyLink } from "@/app/styledComponents"
import { Reflection } from "@khanh-devos/react-reflection"


const Footer = () => {
  return (
  <div className="fixed bottom-6 right-4" >
    <Reflection angle={100} color="white" sideColor="red" borderRadius="10px">
      <MyLinearGradient stroke="lavender" color="transparent" 
      edgeColor="white" padding="0">    

        <div className="rounded flex gap-2 px-1">
          <MyLink pathname="https://www.linkedin.com/in/khanh-dom/" title="LinkedIn" />
          <MyLink pathname="https://github.com/khanh-devos" title="Git" />
          <MyLink pathname="https://docs.google.com/document/d/1CR8ElxzM282_SgUW-zgWD7DJJhSqd4wGDB2X2vAw9u4/edit" title="Resume" />
        </div>
      
      </MyLinearGradient>
    </Reflection>
  </div>
)}

export default Footer