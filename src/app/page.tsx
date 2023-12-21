import { MyLink } from "./styledComponents";


export default async function MainPage() {

  return (
    <div className={"grid gap-10 grid-cols-1 mt-10"}>
      <MyLink 
        pathname='/nobelists_context'
        title="Nobelists" />
      
      <MyLink 
        pathname="/portfolio"
        title="Portfolio" />

    </div>
  )
}
