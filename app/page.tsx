"use client"
import { useRouter } from "next/navigation";
// import Blog from "./blogs/page";

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center gap-2 mt-20">
      <h1 className="uppercase text-xl cursor-pointer" onClick={() => router.push('/quote')}>General</h1>
      <h1>/</h1>
      <h1 className="uppercase text-xl text-primary/40">philosophical</h1>
      </div>
    </div>
  );
}
