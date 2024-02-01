
import {v4 as uuidv4} from 'uuid';
import { MirroredImage, MyLinearGradient, MyLink } from "@/app/styledComponents";
// import Carousel from 'react-multi-carousel';
import Carousel from "../carousel_Yizhuang/Carousel";
import Reflection from "../reflection/Reflecting";
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
        <div className="my-10" key={uuidv4()}>
          
          <button
            onDoubleClick={() => window.open(project.url)}
            className="relative select-none" key={project.id}
            style={{
              minWidth: '100%',
              padding: '0 2%',
              background: 'none'
            }}
            >
              <MirroredImage
                id={project.id}
                url={project.img}
                alt="ebike"
                height="400"
              />
              
              
          </button>

          <div className="text-center w-full mt-6 flex gap-1" draggable={true}
            style={{
              minWidth: '100%',
              padding: '0 10%'
            }}
          >
            
          <Reflection angle={100} color="lightgreen" sideColor="darkgreen" 
            borderRadius='5px'>
            <MyLinearGradient stroke="white" color="lightgreen" 
              edgeColor="rgba(0,0,0,0)" padding="5">
              <p className="text-black" >{project.description}
              {' '}
              <MyLink pathname={project.url} title="Demo" />
              {" | "}
              <MyLink pathname={project.git} title="Source" />
              </p>
            </MyLinearGradient>
            
          </Reflection>
          </div>
        </div>
        
        )})
      }
      
  </Carousel>
  </div>

  )
}

export default Projects;