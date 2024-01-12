import { MyLinearGradient, MyLink } from "@/app/styledComponents"


const Footer = () => {
  return (
  <div 
    className="fixed bottom-6 right-4"
  >
  <MyLinearGradient stroke="lavender" color="rgba(0,0,0,0)" edgeColor="white" margin="0" padding="0"  >
    <div className="rounded flex gap-2 px-1">

      <MyLink pathname="https://www.linkedin.com/in/khanh-dom/" title="LinkedIn" />
      <MyLink pathname="https://github.com/khanh-devos" title="Git" />
      <MyLink pathname="https://docs.google.com/document/d/1CR8ElxzM282_SgUW-zgWD7DJJhSqd4wGDB2X2vAw9u4/edit" title="Resume" />

    </div>
  </MyLinearGradient>
  </div>
)}

export default Footer