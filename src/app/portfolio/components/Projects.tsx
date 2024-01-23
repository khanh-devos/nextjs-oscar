import { MirroredImage } from "@/app/styledComponents";
// import Carousel from 'react-multi-carousel';
import Carousel from "../carousel_Yizhuang/Carousel";
// import 'react-multi-carousel/lib/styles.css';
import { desktopProjects } from "./data";



const Projects = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };


  return (<div className="">
    <Carousel 
      transitionDuration={500}
      customTransition="transform 500ms ease-in-out"
      infinite={true} 
      fading={true}
      flying={true}
      autoPlay={true}
      rewind={false}
      responsive={responsive}
      arrows={false}
    >
      {
        [...desktopProjects].slice().map((project) => {
        
        return (
          <button onDoubleClick={() => window.open(project.url)}
            className="relative select-none mt-10" key={project.id}
            style={{
              minWidth: '100%',
              padding: '0 2%'
            }}
            >
              <MirroredImage
                id={project.id}
                url={project.img}
                alt="ebike"
                height="400"
                text={project.description}
                links={[project.url, project.git]}
              />
              
          </button>
        )})
      }
      
  </Carousel>
  </div>

  )
}

export default Projects;