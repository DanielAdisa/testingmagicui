"use client";

import Image from "next/image"
import image from "../assets/projects/litepay.png"
import flower7 from "../assets/projects/flower7.jpg"
import melody from "../assets/projects/melody.png"
import doom from "../assets/projects/doom.png"
import oglav from "../assets/projects/oglav.png"
import { PROJECTS } from "../constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  return (
    <div className="mt-[30px] md:p-0 p-4  gap-4 ">
        <h1 className=" text-2xl md:p-0 font-bold font-grey-bold mb-[25px]">3D Gallery</h1>
        <div className="grid md:mt-[20px] mt-[50px] grid-cols-1 md:grid-cols-3 md:gap-4 gap-2">
        {PROJECTS.map((item,index) => (
            <div key={index} className="">
                    <h1 className=" hidden md:bloc text-center">{item.title}</h1>
                    <Image className="h-fit max-w-full rounded-lg  transition-all ease-in-out" src={item.image}  alt=""></Image>
                <Link href={`/components/${item.id}`} className=" font-great text-[24px]">
                    <Button variant={"outline"} className=" dark:border-[2px] border-stone-900 dark:border-stone-100 md:hidde w-full dark:text-stone-100 h-auto font-grey-med mt-2 p-4 ">{index+1}</Button>
                </Link>
            </div>
        ))}
</div>
    </div>
  )
}
export default Gallery