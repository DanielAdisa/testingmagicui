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
        <h1 className=" text-2xl md:p-0 font-bold font-grey-bold mb-[25px]">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PROJECTS.map((item,index) => (
            <div key={index} className="">
                <Link href={item.link} className="">
                    <h1 className=" hidden md:block text-center">{item.title}</h1>
                    <Image className="h-auto max-w-full rounded-lg" src={item.image}  alt=""></Image>
                    <Button className=" md:hidden w-full h-auto font-grey-med mt-2 p-4 ">{item.title}</Button>
                </Link>
            </div>
        ))}
</div>
    </div>
  )
}
export default Gallery