import { v4 as uuidv4 } from 'uuid';
import { cloneElement, createElement, ReactElement, RefObject } from 'react';
import { ReflectionState } from './types';



export const createReflectingChild = (
  item: ReactElement|any ,
  state: ReflectionState, 
  lightRef: RefObject<any>
): ReactElement => {
  
  // Check item is a built-in HTMLElement or custom component by its type name
  // Built-in HTMLElement: insert a new glowing item into its innnerHTML.
  // Custom component: insert a relative div containing an absolute glowing item

  if (item.type.name) {
    const reflectingItem = createElement('div', {
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

    const parent = createElement('div', {
      key: uuidv4(),
      style: {
        position: 'relative', zIndex: '10', 
        margin: state.margin, padding: '0',
        width: 'fit-content', height: 'fit-content',
      },
      children: [item, reflectingItem],
    
    })
  
    return parent

  }
  else {

    const dimentions = state.position ? {
      position: state.position,
      top: '0', left: '0', bottom: '0', right: '0'
    } : {}

    const reflectingItem = createElement('div', {
      ref: lightRef,
      style: {...dimentions,
        width: '100%', height: '100%',
        zIndex: '100',
        opacity: '0.5',
        borderRadius: state.borderRadius,
      }
    })

    return cloneElement(item, {key: uuidv4()}, reflectingItem);
  }

}