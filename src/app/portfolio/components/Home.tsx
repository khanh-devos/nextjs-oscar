import { MyHeader1, MyLinearGradient,
  MyParagraph2 } from "@/app/styledComponents";
// import Reflection from "../Reflection/Reflection";
import { Reflection } from '@khanh-devos/react-reflection';


const Home = () => {
  
  return (
  <div className={`mt-20 px-1 md:px-20`}>
    <Reflection angle={100} color="lightgreen" sideColor="black" borderRadius="5px">
      <MyLinearGradient 
        stroke="lavender"
        color="white"
        edgeColor="rgba(0,0,0,0)"
        padding="5"
      >

        <MyHeader1 text="Hi, I am Khanh." />
      
        <MyParagraph2 text='I am a remote full-stack web developer || a motorbiker || an e-biker. A cool wind while riding is a piece of my favor. I enjoy coding either FE (React & Nextjs, TS & JS) or BE (Rails on Ruby, Python-AI).' />

        <MyParagraph2 text='P/S:' />
        <MyParagraph2 text='- Written with Nextjs & Typescript.' />
        <MyParagraph2 text='- 3 features added in "Projects" : sliding, fading, and flying.' />
        <MyParagraph2 text='- Special feature implemented by my own library : REFLECTION.' />
      
        <br/>

      </MyLinearGradient>
  </Reflection>
  </div>
  )
}

export default Home;