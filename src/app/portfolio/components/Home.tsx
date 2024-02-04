import { MyHeader1, MyLinearGradient,
  MyLink,
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
      
        <MyParagraph2>I am a remote full-stack web developer || a motorbiker || an e-biker. A cool wind while riding is a piece of my favor. I enjoy coding either FE (React & Nextjs, TS & JS) or BE (Rails on Ruby, Python-AI).</MyParagraph2>

        <MyParagraph2>P/S:</MyParagraph2>
        <MyParagraph2>- Written with Nextjs & Typescript.</MyParagraph2>
        <MyParagraph2>- 3 features added in "Projects" : sliding, fading, and flying.</MyParagraph2>
        
        <MyParagraph2>- Special "reflective" feature implemented by : <MyLink pathname="https://github.com/khanh-devos/react-reflection/tree/dev" title="my own react-reflection package" /> (GIT_TOKEN: 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).
        </MyParagraph2>



        <br/>

      </MyLinearGradient>
    </Reflection>
  </div>
  )
}

export default Home;