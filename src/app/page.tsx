import Link from "next/link";



export default async function Home() {

  return (
    <div className={"grid gap-10 grid-cols-1 mt-10"}>
      <Link 
        className={"text-black h-16 w-1/2  flex flex-rows-1 items-center text-xl"} 
        href={{
          pathname:'/nobelists_context'
        }}>Nobelists (data stored in the Context)</Link>
      
      <Link 
        className={"text-black h-16 w-1/2 flex flex-rows-1 items-center text-xl"} 
        href={{
          pathname:'/nobelists_ssr'
        }}>Nobelists SSR</Link>

    </div>
  )
}
