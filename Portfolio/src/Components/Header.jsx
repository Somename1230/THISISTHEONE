import img1 from '../Pictures/pine-tree-forest-1.jpg'
import {motion} from 'framer-motion'

export default function Header ({propButton}) {
    return(
         <>
            <div className="absolute top-2/5 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl">
            <div className="text-stroke text-transparent mb-5">ELEVATE YOUR WEBSITE</div>
        <div className=" text-white  sm:rotate-0">ELEVATE YOUR WEBSITE</div>
        <div className="text-stroke text-transparent mt-5">ELEVATE YOUR WEBSITE</div>

      </div>

      <div className="absolute bottom-0 left-0 ml-10 mb-5 z-20  text-white xl:text-2xl">CREATED BY AUSTIN</div>
      <div className="absolute bottom-0 right-0 mr-10 mb-5 z-20  text-white xl:text-2xl">[00]</div>

      <motion.svg 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.8} stroke="white" 
        className="size-40 absolute bottom-1 left-1/2 -translate-x-1/2 z-20">
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </motion.svg>


<img src={img1}
      className="w-full h-full object-cover filter absolute blur-xs"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 "></div>




<div className="h-screen bg-transparent"></div>

<div className="olive w-8/10 lg:w-5/10 m-13 h-9/10 absolute mt-10 rounded-4xl right-0 text-white max-h-200">
    <div className="w-9/10 smaller bg-white mt-8 absolute left-1/2 -translate-x-1/2"></div>
    <h1 className="text-4xl text-gray-500 mt-20 ml-4 xl:text-6xl">ABOUT ME</h1>
    <button 
    onClick={propButton}
    className="absolute top-24 right-4 bg-olive-light text-white border border-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-white hover:text-lime-800 duration-300 z-50">READY FOR WORK</button>
    <h2 className="text-lg text-gray-500 ml-4 xl:text-3xl">Buffalo NY</h2>
    <p className="m-4 xl:text-2xl">I have a strong background in web development, which I began pursuing at the age of 15. Since then, I’ve continuously expanded my skill set and refined my craft. </p>
    <p className="mt-10 m-4 xl:text-2xl">I specialize in building fully responsive, visually engaging websites that not only adapt seamlessly to any device or screen size, but also prioritize clean, modern design principles. My goal is to ensure that each site offers a smooth, intuitive user experience while maintaining a polished and professional aesthetic throughout.</p>
    <h2 className="text-lg text-gray-500 ml-4 absolute bottom-0 mb-15 xl:text-3xl">INSTAGRAM</h2>
    <div className="w-9/10 smaller bg-white absolute left-1/2 -translate-x-1/2 bottom-0 mb-10"></div>

  </div>
  </>
    )
}