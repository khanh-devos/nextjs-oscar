'use client'
 
import { createContext } from 'react'
 


export const Data = createContext({})
 
export default function GlobalData({ children }: {
    children: React.ReactNode
  }) {

 

  return <Data.Provider value={10} >{children}</Data.Provider>
}