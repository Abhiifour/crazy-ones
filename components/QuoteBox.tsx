"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

interface QuoteBoxProps {
    id?: string;
    quote:string;
    url:string;
}
export default function QuoteBox({id, quote, url}:QuoteBoxProps){
    const router = useRouter()
    return (
        <div className="w-[140px] lg:max-w-[180px] tracking-tight break-inside-avoid" onClick={() => router.push(`/quote/${id}`) }>
            <div className="w-[180px] max-h-[220px] overflow-hidden cursor-pointer hidden lg:block">
            {
                url && <Image 
                src={url}            
                alt="Quote image"
                width={180}
                height={220}
                className="object-contain w-full h-full "
                unoptimized
                
            
                priority
                />
            }
            </div>
            <div className="w-[140px] max-h-[180px] overflow-hidden cursor-pointer block lg:hidden">
            
            {
                url && <Image 
                src={url}            
                alt="Quote image"
                width={140}
                height={180}
                className="object-contain w-full h-full "
                unoptimized
                
            
                priority
                />
            }
            </div>
            <p className="mt-[6px] text-start text-sm lg:text-base">
            {quote}
            </p>
        </div>
    )
}