import Figma from "../Pictures/Figma-logo.svg.png"
import Photoshop from "../Pictures/Adobe_Photoshop_CC_icon.svg.png"
import {useState} from "react"
import Tailwind from "../Pictures/tailwind-css-icon-2048x1229-u8dzt4uh.png" 
import Reactt from "../Pictures/React.webp"
import FramerMotion from "../Pictures/framer-motion.svg"
import {motion,AnimatePresence} from "framer-motion"


export default function Skillset({handleAbout, handleContact}) {
    const [selectedTool, setSelectedTool] = useState(null);

    const prompt =[
        {
            image: Figma,
            name: "I use Figma to design interfaces that help clients bring ideas to life and engage users.",
            className: "w-100 h-100", 
            },
        {
            image: Photoshop,
             name: "I use Photoshop to craft visuals that help clients communicate their brand clearly.",
             className: "w-150 h-150",
            },
        {
            image: Tailwind,
             name: "I use Tailwind to build responsive sites that give clients fast, modern experiences.",
             className: "w-150 h-150",
            },
        {
            image:Reactt,
            name:"I use React to develop dynamic websites that help clients engage and scale online.",
            className: "w-150 h-150",
            },
        {
            image: FramerMotion,
            name:"I use Framer Motion to create animations that make client websites engaging and memorable.",
            className: "w-150 h-150",
        }
    ]



    return(
        <>
    <div className="absolute z-60 top-0 w-full h-420 bg-neutral-900 text-white">

        <button 
         onClick={handleAbout}
         className="absolute sm:left-1/4 left-1/10 top-10 text-4xl">ABOUT</button>
        
        
         <button 
         onClick={handleContact}
         className="absolute sm:right-1/4 right-1/10 top-10 text-4xl">CONTACT</button>


<svg xmlns="http://www.w3.org/2000/svg"
style={{transform: "scaleX(2"}}
fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="white" 
className="size-30 left-1/2 absolute -translate-x-1/2 top-20">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>

{selectedTool ? (
    <div
className="left-1/2 -translate-x-1/2 max-w-[700px] xl:text-7xl lg:text-6xl sm:text-5xl text-4xl top-70 absolute text-center z-20">
{selectedTool.name}</div>
) : <div className="left-1/2 -translate-x-1/2 max-w-[700px] xl:text-7xl lg:text-6xl sm:text-5xl text-4xl top-70 absolute text-center z-20">MY SKILLSET</div>}




<div className="mt-220 text-center text-4xl flex flex-col items-center gap-6">
    <button
        onClick={()=>setSelectedTool(prompt[0])} 
    className="hover:text-orange-500">FIGMA</button>

    <button
        onClick={()=>setSelectedTool(prompt[1])}
    className="hover:text-blue-500">PHOTOSHOP</button>

    <button
        onClick={()=>setSelectedTool(prompt[2])}
    className="hover:text-teal-300">TAILWIND</button>

    <button 
        onClick={()=>setSelectedTool(prompt[3])}
    className="hover:text-cyan-500">REACT</button>

    <button 
        onClick={()=>setSelectedTool(prompt[4])}
    className="hover:text-purple-500">FRAMER-MOTION</button>
</div>


<AnimatePresence>
  {selectedTool && (
    <motion.img
      key={selectedTool.name}
      src={selectedTool.image}
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${selectedTool.className} filter brightness-75 absolute top-60 left-1/2 -translate-x-1/2 origin-center`}
    />
  )}
</AnimatePresence>


<div className="absolute bg-green-950 w-full h-100 bottom-0 overflow-hidden">
    <div className="text-white text-8xl tracking-tight -mt-16 -ml-8 overflow-hidden">
    A U S T I N S U K H O V A U S T I N S U K H O V A U S T I N S U K H O V A U S T I N S U K H O V A U S T I N S U K H O V A U S T I N S U K H O V A U S T I N S U K H O V A U S T I N S U K H O V A U S T I N S U K H O V A U S T I N S U K H O V

    </div>
</div>
    </div>
    </>
    )
}