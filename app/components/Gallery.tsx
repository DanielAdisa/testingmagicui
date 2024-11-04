"use client";

import Image from "next/image"
import image from "../assets/projects/litepay.png"
import flower7 from "../assets/projects/flower7.jpg"
import melody from "../assets/projects/melody.png"
import doom from "../assets/projects/doom.png"
import oglav from "../assets/projects/oglav.png"
import { PROJECTS } from "../constants";
import Link from "next/link";

const Gallery = () => {
  return (
    <div className="mt-[30px] p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PROJECTS.map((item,index) => (
            <div key={index}>
                <Link href={item.link}>
                <Image className="h-auto max-w-full rounded-lg" src={item.image}  alt=""></Image>
                <h2>{item.title}</h2>
                </Link>
            </div>
        ))}
</div>
    </div>
  )
}
export default Gallery