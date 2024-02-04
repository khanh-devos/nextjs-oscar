import Reflection from "../Reflection";


export const showReflection = (
    event: MouseEvent,
    reflection: Reflection,
  ) => {
    
    if (reflection.state.isMobileView) {
      if (reflection.lightRef.current) reflection.lightRef.current.remove()
      return;
    }

    const WIDTH = window.innerWidth || 1500;
  
  
    const a = Number(event.clientX)/WIDTH * 100;
    
  
    if ((a < 30 || a > 70)) {
      
      if (reflection.lightRef.current) {
        reflection.lightRef.current.style.background = 'none';
        reflection.lightRef.current.style.zIndex = '-1';  
      }

      return;
    }
    
  
    const b = a * 1;
    const c = a * 1.5;
    const d = a * 2;
    const e = a * 3;
  
    if (reflection.lightRef.current) {
      reflection.lightRef.current.onmouseenter = () => {
        if (reflection.lightRef.current) reflection.lightRef.current.style.scale = '0';
      };
  
      reflection.lightRef.current.onmouseout = () => {
        if (reflection.lightRef.current && reflection.lightRef.current.style.scale !== '0') return;
        setTimeout(() => {
          if (reflection.lightRef.current) reflection.lightRef.current.style.scale = '1' 
        }, 2000);
      };
  
      reflection.lightRef.current.style.background = `repeating-linear-gradient(
      ${reflection.props.angle}deg, 
      ${reflection.props.sideColor} ${a}%, 
      ${reflection.props.sideColor} ${b}%, 
      ${reflection.props.color} ${c}%, 
      ${reflection.props.sideColor} ${d}%, 
      ${reflection.props.sideColor} ${e}%)`
  
      reflection.lightRef.current.style.zIndex = `100`;
  
    }
  
}