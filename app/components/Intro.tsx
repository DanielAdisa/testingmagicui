"use client";
import Image from "next/image";
import image from "../assets/Intro.png"

const Intro = () => {
    return (
        <div className=" md:flex mt-[80px] md:mt-0 gap-4 mx-auto items-center justify-center h-auto z-50">
           <div className="md:flex md:flex-col gap-4 w-full md:w-9/12">
           <h1 className="md:text-4xl text-[25px] md:place-content-start place-content-cente md:p-0 p-4 w-full font-grey-bold flex ">Hi! I am Daniel<span className="animate-waving-hand">{" "}🖐{" "}</span>Adisa</h1>
           <p className=" text-sm tracking-tight  leading-5 font-grey-reg md:p-0 p-2 text-cente md:text-start md:bg-transparent  text-gray-700 backdrop-blur-sm md:backdrop-blur-0 rounded-md bg-black/5">
                Hello, I'm Daniel. As a versatile digital creator, I've honed my skills in Software development, 3D art and graphic design. 
                With a passion for turning ideas into reality, I specialize in crafting digital masterpieces that captivate and inspire. From concept to execution, 
                I'm dedicated to delivering exceptional results. Let's collaborate and create something extraordinary together. #DreamItIMakeIt
           </p>
           </div>
           <div className="md:w-3/12 w-full md:justify-items-end justify-items-center  md:flex-1">
                <Image className=" backdrop-blur-sm z-50 w-[50%] md:w-36" src={image} width={100 } height={100}  alt="hi"/>
           </div>
        </div>
    )
};
 export default Intro;