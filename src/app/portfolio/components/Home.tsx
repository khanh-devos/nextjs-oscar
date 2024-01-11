import { MyHeader1, MyLinearGradient, MyParagraph1, MyParagraph2, MySlidingShow } from "@/app/styledComponents"


const Home = () => {

  return (<div className="mt-20">
    <MyLinearGradient stroke="lavender" color="white" edgeColor="rgba(0,0,0,0)" margin="10" padding="5">
    <MyHeader1 text="Hi, I am Khanh." />

    <MyParagraph1 text="A remote full-stack developer." />
    
    <MyParagraph2 text='I am a motorbiker || an e-biker. A cool wind while riding is a piece of my favor. I enjoy processing things with either JavaScript or TypeScript (React & Nextjs). I also know Rails on Ruby and AI (Python). If you need a remote developer, just email me "dreamproperty.khanh@gmail.com".' />

    <MyParagraph2 text='P/S:' />
    <MyParagraph2 text='- This responsive portfolio was written with Nextjs & Typescript.' />
    <MyParagraph2 text='- I implemented "fading-sliding feature" in the page "Projects" for both mobile and desktop view.' />
    <MyParagraph2 text='- The background image was made by typograms.' />
    <br/>
  </MyLinearGradient>
  </div>
  )
}

export default Home;