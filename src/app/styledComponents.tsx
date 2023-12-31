'use client'

import React, { useEffect, useState } from "react"
import Link from 'next/link';
import Image from "next/image";
import typo1 from "../imgs/portfolio/typo1.png"

export const MyHeader1 = ({text} : {text: string}) => {
    return <h1 className="
    bg-gradient-to-r from-orange-600 via-amber-600 to-amber-400  inline-block text-transparent bg-clip-text
    text-3xl font-bold pt-2 pb-2"
    >
        {text}
    </h1>
    
}

export const MyHeader2 = ({text} : {text: string}) => {
    return <div className="w-full text-center">
      <h3 className="
    bg-gradient-to-r from-orange-600 via-amber-600 to-amber-400  inline-block text-transparent bg-clip-text
    text-2xl text-center pt-2 pb-2 font-bold
    ">
        {text}
    </h3></div>
}

export const MyParagraph1 = ({text} : {text: string}) => {
    return <p className="text-black text-xl" >
        {text}
    </p>
}

export const MyParagraph2 = ({text} : {text: string}) => {
  const [fontSize, setfontSize] = useState('text-base');

  useEffect(() => {
    if(Number(window.innerWidth) < 768) {
      setfontSize('text-sm')
    }
  }, [])

  
  return <p className={`mt-2 mb-2 text-black ${fontSize}`}>
      {text}
  </p>
}

export const MyParagraph3 = ({text} : {text: string}) => {
    return <p className="text-black text-sm">
        {text}
    </p>
}

export const MyBtn1 = ({
  text,
  toggle,
  id,
  callback
} : {
  text: string,
  toggle: string,
  id: string,
  callback: any
}) => {


    return <button className={`text-black m-0 p-0
    ${toggle} 
    ${id !== '0' ? '': 'underline font-bold'}`} id={id} onClick={callback}>
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

export const MirroredImage = ({
    url, alt, height, text, links
}:{
    url: string,
    alt: string,
    height: string,
    text: string,
    links: Array<string>
}) => {

    const [mousePos, setMousePos] = useState([0,0]);
    
    const center = [Number(window.innerWidth)/2, Number(window.innerHeight)/2];
    const maxAngleX = -10;
    const maxAngleY = 10;
    
    const showMousePos = (e: any) => {    
        const stumbling = [
            ((Number(e.clientX) - center[0]) / center[0]) * maxAngleX, 
            ((Number(e.clientY) - center[1]) / center[1]) * maxAngleY
        ]
        
        setMousePos(stumbling);
        
    };


    
    
    if (document.readyState === 'complete') {
      document.querySelector('body')?.addEventListener('mousemove', showMousePos)
    } 
    
    const responsiveMargin = Number(window.innerWidth) > 768 ? '70px': '40px';
    const responsiveHeight = Number(window.innerWidth) > 768 ? `${height}px`: '300px';

    return (
    <div className="shadow-black" 
        style={{
            margin: responsiveMargin,
            perspective: '1000px'
        }} 
        draggable={false}>
      <div style={{position: 'relative', 
        width:'100%', 
        height: responsiveHeight, 
        boxShadow: '30px 30px 100px rgba(100,100,150, 0.9)',
        borderRadius: '20%',
        outline: 'auto whitesmoke',
        transform: `rotateX(${mousePos[1]}deg) rotateY(${mousePos[0]}deg)`,
        }}
        

        >
        <Image
            draggable={false} 
            src={url} 
            alt={alt} 
            quality={100}
            fill
            sizes="100%"
            style={{
              objectFit: 'fill', zIndex: '0', borderRadius: '20%'
            }}
        />

      </div>

      <div className="text-center w-full mt-16 flex gap-1" draggable={false}>
      <MyLinearGradient stroke="white" color="lightgreen" edgeColor="rgba(0,0,0,0)" margin="0" padding="5">
        <p className="text-black" >{text}
        {' '}
        <MyLink pathname={links[0]} title="Demo" />
        {" | "}
        <MyLink pathname={links[1]} title="Source" />
        </p>
      </MyLinearGradient>
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
    <MyLinearGradient stroke="lavender" color="rgba(0,0,0,0)" edgeColor="white" margin="0" padding="0" >
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
    margin,
    padding
}:{
    children: React.ReactNode,
    color: string,
    margin: string,
    padding: string,
    stroke: string,
    edgeColor: string
}) => {

    const [resMargin, setResMargin] = useState(margin);
    const [resPadding, setResPadding] = useState(padding);
    const [resStroke, setResStroke] = useState(stroke);
    
    
    
    useEffect(() => {
      if (Number(window.innerWidth) < 768) {
        setResMargin('5');
        setResPadding('5');
        setResStroke('none');
      }
    }, []);





    return (
    <div
      style={{
        background: `linear-gradient(to right, ${edgeColor}, ${color}, ${color}, ${color}, ${color}, ${edgeColor})`, 
        border: `1px solid ${resStroke}`,
        marginLeft: `${resMargin}%`,
        marginRight: `${resMargin}%`,
        padding: `2% ${resPadding}%`,
        borderRadius: '10px',
        boxShadow: '30px 30px 100px rgba(100,100,150, 0.5)',
        width: 'fit-content'
        }}>
        {children}
    </div>)
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

  const notice = (msg:string) => {
    const p = document.createElement('p');
    p.style.color = 'red';
    p.style.fontStyle = 'italic';
    p.innerHTML = msg;

    
    return p

  }

  const handleSubmit = (e: any) => {
    const form = e.target;

    Object.values(form).forEach((input: any) => {
      
      const emailRegex = /^([a-z0-9-\_\.\#\$\&\?]+)@([a-z0-9-]+).([a-z0-9]{2,4})$/g;
      if (input.type === 'email' && !input.value.match(emailRegex)) {
        const newP = notice('email is not valid');
        input.style.color = 'red';
        input.after(newP);
        setTimeout(() => newP.remove(), 4000);
        e.preventDefault();
        return
      }

      if (input.type === 'text' && input.value.trim().length === 0) {
        const newP = notice('not empty');
        input.style.color = 'red';
        input.after(newP);
        setTimeout(() => newP.remove(), 4000);
        e.preventDefault();
        return
      }

      if (input.name === 'message' && input.value.trim().length === 0) {
        const newP = notice('not shorter than 1');
        input.style.color = 'red';
        input.after(newP);
        setTimeout(() => newP.remove(), 4000);
        e.preventDefault();
        return
      }

      
    })

  }


  const handleMouseOver = (e: any) => {
    e.target.style.background = `orange url(${typo1.src}) no-repeat`;
    e.target.style.backgroundBlendMode = 'multiply';
  }

  const handleMouseOut = (e: any) => {
    e.target.style.background = `skyblue url(${typo1.src}) no-repeat`;
    e.target.style.backgroundBlendMode = 'multiply';
  }

  const handleMouseDown = (e: any) => {
    e.target.style.background = `#ff6b00 url(${typo1.src}) no-repeat`;
    e.target.style.backgroundBlendMode = 'multiply';
  }

  return (
    <form
      style={{textAlign: 'center', position: 'relative'}}
      action="https://formspree.io/f/mqkonqbq" 
      method="POST"
      onSubmit={handleSubmit}
    >
      {children}
      
      <br/>
      <br/>

      <button name="button"
      style={{
        background: `skyblue url(${typo1.src}) no-repeat`,
        backgroundBlendMode: 'multiply',
        color: 'rgba(0,0,0, 0.5)',
        marginBottom: '5%'
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseDown={handleMouseDown}
      className="
      font-bold text-xl p-1 px-6 rounded border border-amber-200">
        SEND
      </button>

    </form>
  )
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