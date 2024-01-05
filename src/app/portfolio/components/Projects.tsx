import { MyGridSection, MirroredImage } from "@/app/styledComponents";
import Link from "next/link";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { desktopProjects, projects } from "./data";





const Projects = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };


  return (<div className="">
    <Carousel responsive={responsive} showDots={true}>
      {
        desktopProjects.map((project, i) => {
        
        return (
          <button onDoubleClick={() => window.open(project.url)}
            className="relative select-none" key={project.id}>
              <MirroredImage
                url={project.img}
                alt="ebike"
                height="300"
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