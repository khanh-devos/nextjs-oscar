import { MyGridSection, MirroredImage } from "@/app/styledComponents";
import Link from "next/link";
import { useState } from "react";
// import Carousel from 'react-multi-carousel';
import Carousel from "../carousel/Carousel";
// import 'react-multi-carousel/lib/styles.css';
import { desktopProjects, projects } from "./data";





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
    <Carousel responsive={responsive} itemClassName="carousel-item" slidesToSlide={1} removeArrow={true}>
      {
        desktopProjects.map((project, i) => {
        
        return (
          <button onDoubleClick={() => window.open(project.url)}
            className="relative select-none" key={project.id}
            onMouseDown={() => setHalt(true)}
            // onMouseMove={() => setHalt(true)}
            onMouseUp={() => setHalt(false)}
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