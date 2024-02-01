import { Children } from "react";
import * as React from 'react';
import { ReflectionProps, ReflectionState } from "./types";

import {showReflection} from "./utils/showSunLight";
import { createReflectingChild } from "./createReflectingItem";
 



const Reflection = ({
  children, 
  color, 
  sideColor, 
  angle, 
  borderRadius,
  sun,
  light,
  position,
  margin,
} : ReflectionProps) => {

  const [state, setState] = React.useState<ReflectionState>({
    isMobileView: false,
    myWhite: sideColor || 'transparent',
    color: color || 'white',
    sideColor: sideColor || 'transparent',
    angle: angle || 70,
    borderRadius: borderRadius,
    sun: sun || false,
    light: light || true,
    position: position || 'none',
    margin: margin || 'auto'
  });
  

  const items = Children.toArray(children);
  
  const lightRef: React.RefObject<HTMLDivElement> = React.useRef(null);
  


  const checkMobileView = () => {

    if (Number(window.innerWidth) <= 100) {
      setState((state) => ({...state, isMobileView: true}))
    }
    else setState((state) => ({...state, isMobileView: false}))
  }
  
  React.useEffect(() => {
    
    window.addEventListener('mousemove', (event) => {
      showReflection(event, lightRef, state);
    });

    window.addEventListener('resize', checkMobileView)
    checkMobileView();
 
  }, [])


  // const createSun = () => {
  //   return (<div 
  //     style={{
  //       position: 'absolute', top: '0', left: '0',
  //       width: '100%', height: '100%',
  //       zIndex: '200',
  //       transform: 'translateX(100px)',
  //       backgroundImage: 'radial-gradient(circle, whitesmoke 3%, lavender 4%, transparent 20%)',
  //     }}  
  //   ></div>)
  // } 

  

  return <>
    {
      items.map((item: React.ReactElement|any) => {
        // if (i === 0)
        if (state.isMobileView) return item;

        return createReflectingChild(item, state, lightRef);
        
      })
    }
  </>

}

export default Reflection;