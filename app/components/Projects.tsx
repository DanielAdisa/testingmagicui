import Image from "next/image"
import { PROJECTSDEV } from "../constants"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Projects = () => {
  return (
    <div className=" gap-4">
        <h1 className=" text-2xl p-4 md:p-0 font-bold font-grey-bold">Projects</h1>
        <div className=" w-3/3 mt-[30px] gap-5 mx-auto"></div>
        {PROJECTSDEV.map((item,index) => (
            <div key={index} className="p-4 md:p-0 mt-[25px]">
              <Link href={item.link} className="flex flex-col items-cente bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-stone-50 dark:bg-stone-950 dark:hover:bg-stone-700">
                <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-[30%] md:rounded-none md:rounded-s-lg" src={item.image} alt=""></Image>
                <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                <div className=" flex gap-2 flex-wrap">
                {item.technologies.map((tech, index) => (
                    <Button key={index} variant={"secondary"} className=" md:hidden">{tech}</Button>
                ))}
                </div>
                </div>
              </Link>
              <Link href={item.link}  >
                <Button   className=" w-full p-2 md:hidden mt-4">Link to Build</Button>
              </Link>
            </div>
        ))}
    </div>
  )
}
export default Projects