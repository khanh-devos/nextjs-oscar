import { MyBtn1, MyNavigation } from "@/app/styledComponents";
import { Dispatch, SetStateAction } from "react";


const Navigation = ({
  setShow
} : {
  setShow: Dispatch<SetStateAction<Array<number>>>
}) => {
  const handleCallback = (e: any): void => {
    const currentID = e.currentTarget.id;

    const es = document.getElementsByClassName('header');
    Object.values(es).forEach((e) => {
      if (e.getAttribute('id') === currentID) {
        e.classList.add('underline')
        e.classList.add('font-bold')
        setShow((state) => state.map((_, index) => index === Number(currentID) ? 1: 0 ));
      }
      else {
        e.classList.remove('underline')
        e.classList.remove('font-bold')
      }
    })

  }

  return (<div>
    <MyNavigation >
      <MyBtn1 text="Home" toggle="header" id="0" callback={handleCallback} />
      <MyBtn1 text="Projects" toggle="header" id="1" callback={handleCallback} />
      <MyBtn1 text="About" toggle="header" id="2" callback={handleCallback} />
      <MyBtn1 text="Contact" toggle="header" id="3" callback={handleCallback} />
      
    </MyNavigation>
  </div>)
}

export default Navigation;