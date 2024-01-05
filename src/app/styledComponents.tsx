'use client'

import React, { useState } from "react"
import Link from 'next/link';
import Image from "next/image";

export const MyHeader1 = ({text} : {text: string}) => {
    return <h1 className="text-black text-3xl">
        {text}
    </h1>
}

export const MyHeader2 = ({text} : {text: string}) => {
    return <h3 className="">
        {text}
    </h3>
}

export const MyParagraph1 = ({text} : {text: string}) => {
    return <p className="text-black text-xl" >
        {text}
    </p>
}

export const MyParagraph2 = ({text} : {text: string}) => {
    return <p className="text-black text-base">
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
    return <button className={`text-black ${toggle}`} id={id} onClick={callback}>
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

    
    document.querySelector('body')?.addEventListener('mousemove', showMousePos)
    
    const responsiveMargin = Number(window.innerWidth) > 768 ? '70px': '40px';
    const responsiveHeight = Number(window.innerWidth) > 768 ? '400px': '300px';

    return (
    <div className="shadow-black" 
        style={{
            margin: responsiveMargin,
            perspective: '1000px'
        }} 
        draggable={false}>
      <div style={{position: 'relative', width:'100%', height: responsiveHeight, 
        boxShadow: '30px 30px 100px grey',
        borderRadius: '20%',
        outline: 'auto whitesmoke',
        
        transform: `rotateX(${mousePos[1]}deg) rotateY(${mousePos[0]}deg)`
    
        }}
        

        >
        <Image
            draggable={false} 
            src={url} 
            alt={alt} 
            quality={100}
            fill
            style={{objectFit: 'fill', zIndex: '0', borderRadius: '20%'}}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
            
        />
      </div>
      <div className="text-center w-full mt-20 flex gap-1" draggable={false}>
      <MyLinearGradient stroke="white" color="lightgreen" margin="0" padding="3">
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
        href={{ pathname }} 
        className="text-black underline text-orange-600 font-bold" style={{margin: 'auto'}} >
        {title}
    </Link>
}




export const MyNavigation = ({
    children
} : {
    children: React.ReactNode
}) => {
    return (<div className="text-black flex flex-row gap-1 justify-end p-4 pt-2">
        {children}
    </div>)
}

export const MyLinearGradient = ({
    children,
    color,
    stroke,
    margin,
    padding
}:{
    children: React.ReactNode,
    color: string,
    margin: string,
    padding: string,
    stroke: string
}) => {

    return (
    <div
      className={`ml-${margin} mr-${margin} p-${padding} 
      rounded-2xl`}
      style={{background: `linear-gradient(to right, rgba(255,255,255, 0), ${color}, ${color}, ${color}, rgba(255,255,255, 0))`, border: `1px solid ${stroke}`}}>
        {children}
    </div>)
}


