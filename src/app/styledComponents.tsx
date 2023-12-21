import React, { MouseEventHandler } from "react"
import Link from 'next/link';

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
    return <p className="text-black text-xl">
        {text}
    </p>
}

export const MyParagraph2 = ({text} : {text: string}) => {
    return <p className="text-black text-base">
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


export const MyLink = ({
    pathname,
    title
} : {
    pathname: string,
    title: string
}) => {
    return <Link 
        href={{ pathname }} 
        className="text-black h-16 w-1/2 flex flex-rows-1 items-center text-xl" >
        {title}
    </Link>
}

export const MyNavigation = ({children} : {children: React.ReactNode}) => {
    return (<div className="flex flex-row gap-1">
        {children}
    </div>)
}



