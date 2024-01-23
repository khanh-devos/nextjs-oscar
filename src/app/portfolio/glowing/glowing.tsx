import { ReactNode, Children } from "react";
import * as React from 'react';


const Glowing = ({
  children
}:{
  children: ReactNode
}) => {

  const items = Children.toArray(children);

  
  return <>
    {
      items.map((item, i) => {
        
        return <div key={i} style={{ position: 'relative' }} >
          
          {item}

          <div 
            style={{
              position: 'absolute', top: '0', left: '0',
              width: '100%', height: '100%',
            //   border: '4px dotted red',
            //   background: 'rgba(200, 200, 200, 0.3)'
            }}  
          ></div>
        </div>

      })
    }
  </>

}

export default Glowing;