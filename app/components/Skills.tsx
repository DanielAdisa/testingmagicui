import { SKILLS } from "../constants"
import { motion } from "framer-motion"

const Skills = () => {
  return (
    <div className="flex flex-col gap-4 pb-[40px]">
        <h1 className=" text-2xl p-4 md:p-0 font-bold font-grey-bold">Skills</h1>
        <div className="flex pr-4 pl-4 flex-wrap md:gap-y-1 gap-x-[2px] gap-y-[3px] md:gap-x-2">
            {SKILLS.map((item,index) => (
                <motion.div 
                whileInView={{opacity: 1, y:0}}
                initial={{opacity:0 , y:50}}
                transition={{duration:0.5 }}
                className=" backdrop-blur-3xl bg-black/90 dark:bg-stone-100/80 md:pr-[1%] md:pl-[1%] md:pt-[0.5%] md:pb-[0.5%] pr-[2%] pl-[2%] pt-[1%] pb-[1%] dark:text-stone-900 text-stone-50 rounded-t-lg" key={index}>
                    {item}
                </motion.div>
                
            ))}
        </div>
    </div>
  )
}
export default Skills