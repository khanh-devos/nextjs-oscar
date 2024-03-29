'use client'

import React, { ReactNode, RefObject, useEffect, useRef, useState } from "react"
import Link from 'next/link';
import Image from "next/image";
import { useForm } from "@formspree/react";
import typo1 from "../imgs/portfolio/typo1.png"
import { Reflection } from "@khanh-devos/react-reflection";


export const MyHeader1 = ({
  children
} : {
  children: string
}) => {
    return <h1 className="
    bg-gradient-to-r from-orange-600 via-amber-600 to-amber-400  inline-block text-transparent bg-clip-text
    text-3xl font-bold pt-2 pb-2"
    >
        {children}
    </h1>
    
}

export const MyHeader2 = ({
  children
} : {
  children: string
}) => {
    return <div className="w-full text-center">
      <h3 className="
    bg-gradient-to-r from-orange-600 via-amber-600 to-amber-400  inline-block text-transparent bg-clip-text
    text-2xl text-center pt-2 pb-2 font-bold
    ">
        {children}
    </h3></div>
}

export const MyParagraph1 = ({text} : {text: string}) => {
    return <p className="text-black text-xl" >
        {text}
    </p>
}

export const MyParagraph2 = ({
  children,
} : {
  children: ReactNode,
}) => {
  const [fontSize, setfontSize] = useState('text-base');

  useEffect(() => {
    if(Number(window.innerWidth) < 768) {
      setfontSize('text-sm')
    }
  }, [])

  
  return <p className={`mt-2 mb-2 text-black ${fontSize}`}>
      {children}
  </p>
}

export const MyParagraph3 = ({text} : {text: string}) => {
    return <p className="text-black text-sm">
        {text}
    </p>
}

export const MyBtn1 = ({
  text,
  style,
  callback
} : {
  text: string,
  style?: {},
  callback: any,
}) => {


    return <button 
      className={`text-black m-0 p-0`}
      style={{...style}}
      onClick={callback}
    >
      {text}
    </button>
}

export const MyBtn2 = ({text} : {text: string}) => {
    return <button className="">
        {text}
    </button>
}

export const MySection = ({children} : {children: React.ReactNode}) => {
    return (<div className="">
        {children}
    </div>)
}

export const MyGridSection = ({
    children, width
} : {
    width: string,
    children: React.ReactNode
}) => {
    return (<div style={{
        display: 'grid',
        gridGap: '5px',
        gridTemplateColumns: `repeat(auto-fit, minmax(${width}, auto))`,
        
    }}>
        {children}
    </div>)
}


const showMousePos = (
  e: MouseEvent
) => {
  // no perspective in case of mouse over or mobile view
  const center = [Number(window.innerWidth)/2, Number(window.innerHeight)/2];
  


  const stumbling = [
    ((Number(e.clientX) - center[0]) / center[0]), 
    ((Number(e.clientY) - center[1]) / center[1])
  ]

  // setMousePos(stumbling);

  return stumbling;
  
}


export const MirroredImage = ({
  url, alt, height, id
}:{
  url: string,
  alt: string,
  height: string,
  id: string
}) => {
  
  
  const divRef: RefObject<HTMLDivElement> = useRef(null);

  let halt: boolean = false;
  const removePerspective = () => {halt = true}
  const addPerspective = () => {halt = false}

  useEffect(() => {

    window.addEventListener('mousemove', (event) => {
      const maxAngleX = 1.5 * 10, maxAngleY = 1.5 * -10;
      const stumbling = showMousePos(event) || [0,0]

      if (halt || Number(window.innerWidth) < 768) {
        if (divRef.current) {
          divRef.current.style.transform = `none`;
        }
        return
      }

      const transform = `rotateX(${stumbling[1] * maxAngleY}deg) rotateY(${stumbling[0] * maxAngleX}deg)`;

      const boxShadow = `${-30 * stumbling[0]}px 30px 100px rgba(100,100,150, 0.9)`
  
      if (divRef.current) {
        divRef.current.style.transform = transform;
        divRef.current.style.boxShadow = boxShadow;
        divRef.current.style.zIndex = '6';
      }

    });

  }, [halt])
  
  
  
  const responsiveMargin = Number(window.innerWidth) > 768 ? '70px': '40px';
  const responsiveHeight = Number(window.innerWidth) > 768 ? `${height}px`: '300px';

  return (
  
  <div className="shadow-black" 
      style={{
        margin: responsiveMargin,
        perspective: '1000px',
      }}
      draggable={false}
  > 
    
      <div
        ref={divRef}
        onMouseEnter={removePerspective}
        onMouseLeave={addPerspective}
        style={{
          position: 'relative',
          width:'100%',
          margin: 'auto',
          height: responsiveHeight, 
          borderRadius: '20%',
          outline: `auto lightgreen`,
          border: '3px solid red',
          boxShadow: '30px 30px 100px rgba(100,100,150, 0.9)',
          padding: '0',
        }}
      >
        
        <Reflection angle={100} sideColor='skyblue' borderRadius="20%">
          <div style={{minWidth: '100%', minHeight: '100%'}}></div>
        </Reflection>
      </div>
    

    
    <div
      style={{
        position: 'absolute',
        top: '0', left: '0',
        width:'100%',
        margin: 'auto',
        height: responsiveHeight, 
        borderRadius: '60%',
        zIndex: '5',
        scale: id === 'project3' ? '1' : '0.95',
        boxShadow: id === 'project3' ? 'none' : '5px 5px 5px rgba(50,50,50, 0.7)',
      }}
    >
      
      <Image
          onMouseEnter={removePerspective}
          onMouseLeave={addPerspective}
          draggable={false} 
          src={url} 
          alt={alt}
          quality={100}
          fill
          sizes="100%"
          style={{
            objectFit: 'fill', borderRadius: '50%',
          }}
      />
    </div>
    
  </div>

  )
}

export const MyLink = ({
    pathname,
    title
} : {
    pathname: string,
    title: string
}) => {
    return <Link 
        href={{ pathname }} target="_blank" 
        className="text-black underline text-orange-600 font-bold" 
        style={{margin: 'auto'}} >
        {title}
    </Link>
}




export const MyNavigation = ({
    children
} : {
    children: React.ReactNode
}) => {
  return (
  <div className="flex justify-end">
    <div className="fixed top-4 right-4 z-10">
    <MyLinearGradient stroke="lavender" color="rgba(0,0,0,0)" edgeColor="white"     padding="0" >
      <div className="text-black flex flex-row gap-2 px-2">
        {children}
      </div>
    </MyLinearGradient>
    </div>
  </div>
    )
}

export const MyLinearGradient = ({
    children,
    color,
    edgeColor,
    stroke,
    borderRadius,
    padding
}:{
    children: React.ReactNode,
    color: string,
    edgeColor: string,
    stroke?: string,
    padding: string,
    borderRadius?: string,
}) => {

    const shadowDivRef: RefObject<HTMLDivElement> = useRef(null);
    const [resPadding, setResPadding] = useState(padding);
    
    
    useEffect(() => {
      if (Number(window.innerWidth) < 768) {
        setResPadding('5');
      }

      window.addEventListener('mousemove', (event) => {
        const stumbling = showMousePos(event) || [0,0]

        if (Number(window.innerWidth) < 768) {
          if (shadowDivRef.current) shadowDivRef.current.style.boxShadow = '130px 30px 60px rgba(100,100,150, .4)';
          return
        }
  
        const boxShadow = `${-50 * stumbling[0]}px 30px 60px rgba(100,100,150, .5)`;
    
        if (shadowDivRef.current) {
          shadowDivRef.current.style.boxShadow = boxShadow;
        }
  
      });

    }, []);

    

    return (
    
    <div
      ref={shadowDivRef}
      draggable={false}
      style={{
        background: `linear-gradient(to right, ${edgeColor}, ${color}, ${color}, ${color}, ${color}, ${edgeColor})`, 
        border: `0.1px solid ${stroke}`,
        padding: `2% ${resPadding}%`,
        borderRadius: borderRadius || '10px',
        width: 'fit-content',
        minWidth: '70%',
        margin: `auto`
        }}>
        {children}
    </div>
    )
}


export const MyInput = ({
  type,
  placeholder,
  stroke,
  width,
  name
}:{
  type: string,
  placeholder: string,
  stroke: string,
  width: string,
  name: string
}) => {
  return (
    <input type={type} placeholder={placeholder} name={name}
    style={{
        width,
        background: 'none',
        border: `0.1px solid ${stroke}`,
        textAlign: 'center',
    }}
    
    className="focus:ring focus:outline-none
    border rounded border-black mt-4 text-black p-2 text-sm" required/>
    
  )
}

export const MyTextArea = ({
    placeholder,
    stroke,
    width, name
  }:{
    placeholder: string,
    stroke: string,
    width: string,
    name: string,
  }) => {
    return (
      <textarea placeholder={placeholder} name={name}
        style={{
          width,
          background: 'none',
          border: `0.1px solid ${stroke}`,
          textAlign: 'center',
        }}
      
      className="focus:ring focus:outline-none
      border rounded border-black mt-4 text-black p-2 text-sm" required/>
  )
}
  
export const MyForm = ({
  children
}:{
  children: React.ReactNode
}) => {

  const [state, handleSubmit] = useForm("mqkonqbq");
  const [back, setBack] = useState(true);

  const notice = (msg:string) => {
    const p = document.createElement('p');
    p.style.color = 'red';
    p.style.fontStyle = 'italic';
    p.innerHTML = msg;

    
    return p

  }

  const myHandleSubmit = (e: any) => {
    
    const form = e.target;
    let valid = true;

    Object.values(form).forEach((input: any) => {
      
      const emailRegex = /^([a-z0-9-_.#$&?]+)@([a-z0-9-]+).([a-z0-9]{2,4})$/g;
      if (input.type === 'email' && !input.value.match(emailRegex)) {
        const newP = notice('email is not valid');
        input.style.color = 'red';
        input.after(newP);
        setTimeout(() => newP.remove(), 4000);
        e.preventDefault();
        valid = false;
      }

      if (input.type === 'text' && input.value.trim().length === 0) {
        const newP = notice('not empty');
        input.style.color = 'red';
        input.after(newP);
        setTimeout(() => newP.remove(), 4000);
        e.preventDefault();
        valid = false
      }

      if (input.name === 'message' && input.value.trim().length === 0) {
        const newP = notice('not shorter than 1');
        input.style.color = 'red';
        input.after(newP);
        setTimeout(() => newP.remove(), 4000);
        e.preventDefault();
        valid = false
      }
      

    })

    if (valid) handleSubmit(e);
    

  }

  if (state.succeeded && back) {
    return <div className="text-center">
      <MyParagraph2>Your message succesfully sent.</MyParagraph2>
      <MyFormBtn callback={() => setBack(false)} text="BACK"/>
    </div>
  }

  return (
    <form
      className="py-4"
      style={{textAlign: 'center', position: 'relative', margin: 'auto'}}
      onSubmit={myHandleSubmit}
    >
      {children}
      
      <br/>
      <br/>

      <MyFormBtn text="SEND" />

    </form>
  )
}

export const MyFormBtn = ({
  text,
  callback
}:{
  text:string,
  callback?: Function
}) => {
  const handleMouseOver = (e: any) => {
    e.target.style.background = `orange url(${typo1.src}) no-repeat`;
    e.target.style.backgroundBlendMode = 'multiply';
    e.target.style.borderRadius = '7px';
  }

  const handleMouseOut = (e: any) => {
    e.target.style.background = `skyblue url(${typo1.src}) no-repeat`;
    e.target.style.backgroundBlendMode = 'multiply';
  }

  const handleMouseDown = (e: any) => {
    e.target.style.background = `#ff6b00 url(${typo1.src}) no-repeat`;
    e.target.style.backgroundBlendMode = 'multiply';
  }

  return <button name="button"
    style={{
      background: `skyblue url(${typo1.src}) no-repeat`,
      backgroundBlendMode: 'multiply',
      color: 'rgba(0,0,0, 0.5)',
      borderRadius: '7px'
    }}
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
    onMouseDown={(e) => {
      handleMouseDown(e);
      if (callback) callback();
    }}
    className="border border-amber-200"
  >
    <Reflection angle={100} color="white" sideColor="black" borderRadius="7px">
      <div className="text-neutral-600 font-bold text-xl p-1 px-6"
        style={{borderRadius: '7px'}}
      >{text}</div>
    </Reflection>
  </button>
}

export const MySlidingShow = ({
  children,
  show
}:{
  children: React.ReactNode,
  show: number
}) => {
  
  return (<div
    style={{
      visibility: `${show < 1 ? 'hidden': 'visible'}`,
      opacity: `${show}`,
      filter: `blur(${(1 - show)}px)`,
      transform: `${show < 1 ? 'translateY(50px)' : 'translateY(0px)'}`,
      transitionDuration: '0.7s',
    }}
  >
    {children}
  </div>)
}