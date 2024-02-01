import { ReflectionState } from "../types";
import * as React from 'react';


export const showReflection = (
    event: MouseEvent, 
    lightRef: React.RefObject<HTMLDivElement>,
    state: ReflectionState,
  ) => {
    if (state.isMobileView) {
      if (lightRef.current) lightRef.current.remove()
      return;
    }


    const WIDTH = window.innerWidth || 1500;
  
  
    const a = Number(event.clientX)/WIDTH * 100;
      
  
    if ((a < 30 || a > 70)) {

      if (lightRef.current) {
        lightRef.current.style.background = 'none';
        lightRef.current.style.zIndex = '-1';  
      }

      return;
    }
    
  
    const b = a * 1;
    const c = a * 1.5;
    const d = a * 2;
    const e = a * 3;
  
    if (lightRef.current) {
  
      lightRef.current.onmouseenter = () => {
        if (lightRef.current) lightRef.current.style.scale = '0';
      };
  
      lightRef.current.onmouseout = () => {
        if (lightRef.current && lightRef.current.style.scale !== '0') return;
        setTimeout(() => {
          if (lightRef.current) lightRef.current.style.scale = '1' 
        }, 2000);
      };
  
      
      
      lightRef.current.style.background = `repeating-linear-gradient(
      ${state.angle}deg, 
      ${state.myWhite} ${a}%, 
      ${state.sideColor} ${b}%, 
      ${state.color} ${c}%, 
      ${state.sideColor} ${d}%, 
      ${state.myWhite} ${e}%)`
  
      lightRef.current.style.zIndex = `100`;
  
    }
  
}