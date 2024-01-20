import { MirroredImage } from "@/app/styledComponents";
import { useState } from "react";
// import Carousel from 'react-multi-carousel';
import Carousel from "../carousel_Yizhuang/Carousel";
// import 'react-multi-carousel/lib/styles.css';
import { desktopProjects } from "./data";



const Projects = () => {
  const [halt, setHalt] = useState(false);


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


  return (<div className="mt-10">
    <Carousel 
      transitionDuration={400}
      customTransition="transform 400ms ease-in-out"
      infinite={true} 
      fading={true}
      flying={true} 
      autoPlay={false}
      responsive={responsive}
      arrows={false}
    >
      {
        desktopProjects.slice(0, 4).map((project) => {
        
        return (
          <button onDoubleClick={() => window.open(project.url)}
            className="relative select-none" key={project.id}
            onMouseDown={() => setHalt(true)}
            onMouseUp={() => setHalt(false)}
            style={{
              minWidth: '100%',
              padding: '0 2%'
            }}
            >
              <MirroredImage
                url={project.img}
                alt="ebike"
                height="400"
                text={project.description}
                links={[project.url, project.git]}
                halt={halt}
              />
              
          </button>
        )})
      }
      
  </Carousel>
  </div>

  )
}

export default Projects;