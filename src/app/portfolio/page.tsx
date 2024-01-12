import { Metadata } from "next";
import App from "./App";
import { MyHeader1, MyParagraph1, MyParagraph3 } from "../styledComponents";



export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Khanh',
  icons: 'https://media.licdn.com/dms/image/D5635AQH4LerGoC-mVg/profile-framedphoto-shrink_200_200/0/1691165128456?e=1705482000&v=beta&t=BjTipv_VKBtDvxzTU1XsLXEiGPQV_1Wi1oDprpsmdgI'
}

const Portfolio = () => {
    

    return (
      <div className="">
        
        <App/>
        

      </div>
    )
}


export default Portfolio;