'use client'
 
import { createContext, ReactNode } from 'react'
 


export const Data = createContext({})
 
export default function GlobalData({ children }: {
    children: ReactNode
  }) {

 

  return <Data.Provider value={10} >{children}</Data.Provider>
}