"use client";

import TextReveal from "../../components/ui/text-reveal"
import Meteors from "../../components/ui/meteors"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"
import Image from "next/image";
import Globe from "@/components/ui/globe";
import { Tree, File, Folder} from "@/components/ui/file-tree";
import Link from "next/link";
import image from "../assets/123.png"



const Navbar = () => {
  return (
    <div className=" w-full mx-auto flex items-center justify-center font-grey-reg">
       <div className="relative flex h-auto w-full mx-auto flex-col items-center bg-black/10 rounded-xl justify-center overflow-hidden">
      <Tree
        className="p-2 overflow-hidden"
        initialSelectedId="7"
        initialExpandedItems={[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
        ]}
        elements={ELEMENTS}
      >
        <Folder className="" element="Services" value="1">
          <Folder value="2" element="Graphics & Design">
            <File value="3">
              {/* <Image src={image} alt="Hello" width={1000} height={200} className="rounded-full hover:grayscale"></Image> */}
            </File>
            <File value="4">
            {/* <Image src={image} alt="Hello" width={200} height={200} className="rounded-full"></Image> */}
            </File>
          </Folder>
          <Folder value="5" element="Web Design">
            <Folder value="6" element="ui">
              <File value="7">
                <p>button.tsx</p>
              </File>
            </Folder>
            <File value="8">
              <Link href={"/"}><p>header.tsx</p></Link>
            </File>
            <File value="9">
              <p>footer.tsx</p>
            </File>
          </Folder>
          <Folder value="10" element="3D/Animation">
            <File value="11">
              <p>utils.ts</p>
            </File>
          </Folder>
        </Folder>
      </Tree>
    </div>
  </div>
  )
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "app",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "layout.tsx",
          },
          {
            id: "4",
            isSelectable: true,
            name: "page.tsx",
          },
        ],
      },
      {
        id: "5",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "6",
            isSelectable: true,
            name: "header.tsx",
          },
          {
            id: "7",
            isSelectable: true,
            name: "footer.tsx",
          },
        ],
      },
      {
        id: "8",
        isSelectable: true,
        name: "lib",
        children: [
          {
            id: "9",
            isSelectable: true,
            name: "utils.ts",
          },
        ],
      },
    ],
  },
];
export default Navbar


{/* <TextReveal text="Hi daisy I really do miss you and everything about you. just thought you should know" /> */}