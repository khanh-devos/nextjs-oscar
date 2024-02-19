
import {v4 as uuidv4} from 'uuid';
import { MirroredImage, MyLinearGradient, MyLink } from "@/app/styledComponents";
import Carousel from "../carousel_Yizhuang/Carousel";
import { desktopProjects } from "./data";
import { Reflection } from '@khanh-devos/react-reflection';




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
      autoPlay={false}
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

          <div className="text-center w-full mt-6 flex gap-1" draggable={false}
            style={{
              minWidth: '100%',
              padding: '0 10%'
            }}
          >
            
          <Reflection border={true} borderColor="skyblue" borderShiningColor='orange' borderWidth={6} angle={100} color="lightgreen" sideColor="darkgreen" borderRadius='10px' borderPathScale={2} borderRadiusRatio={1.4}>
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