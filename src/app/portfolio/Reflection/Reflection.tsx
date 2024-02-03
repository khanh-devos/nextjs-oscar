import * as React from "react";
import { ReflectionProps, ReflectionState } from "./types";

import {showReflection} from "./utils/showLight";
import { createReflectingChild } from "./createReflectingItem";


class Reflection extends React.Component<ReflectionProps, ReflectionState> {
  public static defaultProps = {
    myWhite: 'transparent',
    color: 'white',
    sideColor: 'transparent', 
    angle: 70, 
    borderRadius: '0',
    sun: false,
    light: true,
    position: 'block',
    margin: 'auto',
  }

  public readonly lightRef: React.RefObject<HTMLDivElement>;
  

  constructor(props: ReflectionProps) {
    super(props);
    this.state = {
      isMobileView: false
    };
    
    this.lightRef = React.createRef();
  }


  public checkMobileView = () => {

    if (Number(window.innerWidth) <= 1100) {
      this.setState((state) => ({...state, isMobileView: true}))
    }
    else this.setState((state) => ({...state, isMobileView: false}))
  }
  
  public componentDidMount(): void {
    window.addEventListener('mousemove', (event) => {
      showReflection(event, this);
    });

    window.addEventListener('resize', this.checkMobileView)
    this.checkMobileView();
  }

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

  
  render() {
    const items = React.Children.toArray(this.props.children);

    return <>
      {
        items.map((item: React.ReactElement|any) => {
          // if (i === 0)
          if (this.state.isMobileView) return item;

          return createReflectingChild(item, this, this.lightRef);
          
        })
      }
    </>

  }
}


export default Reflection;