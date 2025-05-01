import { getAQuote } from "@/lib/notion"
import Image from "next/image"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const quote : any = await getAQuote(slug)
  return <div className="max-w-[600px] mx-auto flex flex-col justify-start mt-14 items-center ">
     <h1 className="uppercase text-xl text-primary font-medium">{quote.name}</h1>
     <div className="mt-20">
     <div className="w-[300px] max-h-[400px] overflow-hidden mx-auto">
     <img
        src={quote.image}
        
        alt="Quote image"
        className="object-fill w-full h-full "
        />
     </div>
    <p className="mt-3 text-start max-w-[300px]">
    {quote.quote}
    </p>
     </div>
   </div>
  

}