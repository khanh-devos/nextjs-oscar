"use client"

import IMAGES, { BackIcon, MicroIcon, SettingIcon } from "@/container";
import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function MyHeader({
  title, country, amount, stats
}: {
  title: String,
  country: String,
  amount: number | undefined,
  stats: String,
}) {
  const styled = ():string => title.includes('Nation') ? 'text-right' : '' ;

  
  const router = useRouter()

  const handleBack = () => {
    if (title.includes('Nation')) {
      // From Nation => Show the World Nobelists
      router.push('/nobelists_ssr')
    } else if (title.includes('World')) {
      router.push('/')
    } else {
      // From City Nobelists => the Nation Nobelists
      router.push(`/nobelists_ssr/${country}`)

    }
  };


  return (
    <div className="">
      <div className="flex color-4 p-1 pl-0">
        <button
          className={"flex-none"}
          onClick={handleBack}
        >
          <BackIcon />
        </button>
        <p className={"flex-1 m-auto text-center"} >{title}</p>
        <div className={"flex-none flex"}>
          <MicroIcon />
          <SettingIcon />
        </div>
      </div>

      <div className={"grid grid-cols-2 pt-2 pb-2 color-5"}>
        <Image
          className={"m-auto h-24 max-h-24 p-2 pr-0 opacity-30"}
          src={IMAGES[country.toLowerCase().replace(/[\d\W]/gi, '')].src}
          alt="nation map"
          width={200}
          height={200}
        />
        <div className={`grid grid-cols-1 gap-0 content-center p-5 ${styled()}`} >
          <h2 className="text-xl font-bold leading-5">{country.toUpperCase().replace("%20", ' ')}</h2>
          <p className="leading-3">
            {`${amount} nobelists`}
          </p>
        </div>
      </div>

      <div className="p-0.5">{stats.toUpperCase()}</div>

    </div>
  );
}
