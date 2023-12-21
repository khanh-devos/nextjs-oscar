import { MyBtn1, MyNavigation } from "@/app/styledComponents";


const Navigation = () => {
  const handleCallback = (e: any): void => {
    const currentID = e.currentTarget.id;

    const es = document.getElementsByClassName('header');
    Object.values(es).forEach((e) => {
      if (e.getAttribute('id') === currentID) {
        e.classList.add('underline')
      }
      else {
        e.classList.remove('underline')
      }
    })

  }

  return (<div>
    <MyNavigation >
      <MyBtn1 text="home" toggle="header" id="0" callback={handleCallback} />
      <MyBtn1 text="projects" toggle="header" id="1" callback={handleCallback} />
      <MyBtn1 text="about" toggle="header" id="2" callback={handleCallback} />
      <MyBtn1 text="contact" toggle="header" id="3" callback={handleCallback} />
      
    </MyNavigation>
  </div>)
}

export default Navigation;