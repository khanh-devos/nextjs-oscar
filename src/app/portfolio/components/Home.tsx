import { MyHeader1, MyLinearGradient, MyParagraph1, MyParagraph2 } from "@/app/styledComponents"


const Home = () => {

  return (<MyLinearGradient stroke="#ff6b00" color="white" margin="20" padding="10">
    <MyHeader1 text="Hi, I am Khanh." />

    <MyParagraph1 text="A remote full-stack developer." />
    
    <MyParagraph2 text='I can build nearly everything with React or Nextjs (both JS or TS). I also know Rails on Ruby, (Python if necessary). My GitHub has over 40 projects. If you want a lively web, just email me "dreamproperty.khanh@gmail.com".' />
  </MyLinearGradient>
  )
}

export default Home;