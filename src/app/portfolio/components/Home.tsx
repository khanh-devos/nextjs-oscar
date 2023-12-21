import { MyHeader1, MyParagraph1, MyParagraph2 } from "@/app/styledComponents"


const Home = () => {
  return (<div>
    <MyHeader1 text="Hi, I am Khanh." />

    <MyParagraph1 text="A remote full-stack developer." />
    
    <MyParagraph2 text='I can build nearly everything with HTML, CSS, and JS. I also know React, TypeScript, Rails on Ruby, and Python if necessary. My GitHub has over 40 projects. If you want a lively web, just email me "dreamproperty.khanh@gmail.com".' />
  </div>
  )
}

export default Home;