import Link from "next/link";



export default async function Home() {

  return (
    <div>
      <h2>Home</h2>
      <Link href={{
          pathname:'/nobelists_redux'
        }}>Nobelists Redux</Link>
      <br />
      <Link href={{
          pathname:'/nobelists_ssr'
        }}>Nobelists SSR</Link>

      <br />
      <Link href={{
          pathname:'/nobelists_context'
        }}>Nobelists Context</Link>
    </div>
  )
}
