import { EXPERIENCES } from "../constants"

import { Tree, File, Folder} from "@/components/ui/file-tree";
import Link from "next/link";
const WorkExperience = () => {
  return (
    <div className=" flex flex-col h-auto">
        <div className="">
            <h1 className=" text-2xl p-4 dark:text-stone-100  md:p-0 font-bold font-grey-bold">Work Experience</h1>
              <div className=" p-4">
                <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                    {EXPERIENCES.map((item,index) => (<li key={index} className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-grey-lit leading tracking-widest text-gray-400 dark:text-gray-500">{item.year}</time>
                        <h3 className="text-lg font-grey-med text-gray-900 dark:text-stone-300">{item.role} @ {item.company}</h3>
                        <p className=" text-sm tracking-tight leading-5 dark:text-stone-500  text-gray-700 font-grey-reg">{item.description}</p>
                    </li>))}
                </ol>
              </div>

        </div>
    </div>
  )
}


export default WorkExperience