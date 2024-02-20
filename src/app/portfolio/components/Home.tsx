import { MyHeader1, MyLinearGradient,
  MyLink,
  MyParagraph2 } from "@/app/styledComponents";
import { Reflection } from '@khanh-devos/react-reflection';


const Home = () => {
  
  return (
  <div className={`mt-20 px-1 md:px-20`}>
    
    <Reflection borderShiningColor="#FC6736" border={true} borderWidth={9} borderColor="green" borderRadiusRatio={1.5} borderPathScale={2.5} angle={100} color="skyblue" sideColor="black" borderRadius="20px">
      <MyLinearGradient 
        stroke="lavender"
        color="white"
        edgeColor="rgba(0,0,0,0)"
        padding="5"
        borderRadius='20px'
      >

        <MyHeader1 text="Hi, I am Khanh." />
      
        <MyParagraph2>I am a remote full-stack web developer || a motorbiker || an e-biker. A cool wind while riding is a piece of my favor. I enjoy coding either FE (React & Nextjs, TS & JS) or BE (Rails on Ruby, Python-AI).</MyParagraph2>

        <MyParagraph2>P/S:</MyParagraph2>
        <MyParagraph2>- Written with Nextjs & Typescript.</MyParagraph2>
        <MyParagraph2>- 3 features added in &quot;Projects&quot; : sliding, fading, and flying.</MyParagraph2>
        
        <MyParagraph2>- Special &quot;Reflective&quot; feature implemented by : <MyLink pathname="https://github.com/khanh-devos/react-reflection/pkgs/npm/react-reflection" title="my react-reflection package" />
        </MyParagraph2>



        <br/>

      </MyLinearGradient>
    </Reflection>
  </div>
  )
}

export default Home;