import { v4 as uuidv4 } from 'uuid';
import * as React from 'react';
import { ReflectionState } from './types';



export const createReflectingChild = (
  item: React.ReactElement|any ,
  state: ReflectionState, 
  lightRef: React.RefObject<any>
): React.ReactElement => {
  
  // Check item is a built-in HTMLElement or custom component by its type name
  // Built-in HTMLElement: insert a new glowing item into its innnerHTML.
  // Custom component: insert a relative div containing an absolute glowing item

  if (item.type.name) {
    const reflectingItem = React.createElement('div', {
      ref: lightRef,
      key: uuidv4(),
      style: {
        position: 'absolute',
        top: '0', left: '0', bottom: '0', right: '0',
        width: '100%', height: '100%',
        zIndex: '100',
        opacity: '0.5',
        borderRadius: state.borderRadius || 'inherit',
      }
    })

    const parent = React.createElement(
      'div',
      {
        key: uuidv4(),
        style: {
          position: 'relative', zIndex: '10', 
          margin: state.margin, padding: '0',
          width: 'fit-content', height: 'fit-content',
        }
      },
      [item, reflectingItem]
    )
  
    return parent

  }
  else {
    const reflectingItem = React.createElement('div', {
      ref: lightRef,
      key: uuidv4(),
      style: {
        position: 'absolute',
        top: '0', left: '0', bottom: '0', right: '0',
        width: '100%', height: '100%',
        zIndex: '100',
        opacity: '0.5',
        borderRadius: state.borderRadius || 'inherit',
      }
    })

    const parent = React.createElement(
      'div',
      {
        key: uuidv4(),
        style: {
          position: 'relative', zIndex: '10', 
          margin: state.margin, padding: '0',
          width: '100%', height: '100%',
        }
      },
      [reflectingItem]
    )



    return React.cloneElement(item, {key: uuidv4()}, parent);
  }

}