"use client";

import Image from "next/image";
import Navbar from "./components/Navbar"
import CustomDock from "./components/CustomDock";
import Intro from "./components/Intro";
import Meteors from "@/components/ui/meteors";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className=" relative md:w-8/12  md:p-8 mx-auto overflow-hidden text-gray-700 ">
      <main className=" flex flex-col overflow-hidden">
      <Meteors/>
      <Intro/>
      <CustomDock orientation={"vertical"} />
      <WorkExperience/>
      <Skills/>
      <Projects/>
      {/* <Navbar /> */}
      </main>
    </div>
  );
}
