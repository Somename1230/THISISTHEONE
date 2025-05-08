import {useState, useEffect} from 'react';
import {motion} from "framer-motion"
import img2 from './Pictures/image.png'
import img3 from './Pictures/AdobeStock_537204672.jpeg'
import img4 from './Pictures/project1.png'
import Header from './Components/Header'


export default function Main({handleContact, handleAbout, handleSkillset}) {

  let apple=1;
    
    const [isDisabled,setIsDisabled]=useState(false);
  
    const [showed,setShowed]=useState(false);
    const [showed1,setShowed1]=useState(false);
    const [showed2,setShowed2]=useState(false);
  
  
  
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth<1020) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true)
      }
    };
  
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return()=>{
  
  
      window.removeEventListener("resize", checkScreenSize);
    }
  },[]);
  
  function handleProjects () {
    window.scrollTo(0, 3400);
  }

  return(
    <>
    
    <motion.div
    initial={{ scale: 1.2, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-transparent border-white fixed border-14 w-full h-full z-40 select-none pointer-events-none"
    >
      
    <div className="absolute top-0 left-0 w-full h-24 bg-black/70 z-40"></div>
    <div className="flex justify-evenly mt-7 text-white text-base md:text-lg lg:text-2xl xl:text-4xl z-40 relative pointer-events-auto">
  <button onClick={handleAbout}>ABOUT</button>
  <button onClick={handleSkillset}>SKILLSET</button>

  <div className="w-40 sm:w-56 md:w-64 lg:w-80 xl:w-96"></div>

  <button onClick={handleProjects}>PROJECTS</button>
  <button onClick={handleContact}>CONTACT</button>
</div>
<div className="bg-white h-15 w-40 sm:h-20 sm:w-1/3 xl:w-1/3 top-0 left-1/2 fixed -translate-x-1/2 clip-trapezoid z-40">
<div className=" pt-4 text-center text-base sm:text-1xl md:text-3xl xl:text-4xl">AUSTIN SUKHOV</div>
      
      </div>
      </motion.div>
      
      <Header propButton={handleContact}/>



<div className="h-220 lg:h-300 bg-black">
  


  <div className="h-full bg-black"></div>
  <div className="h-full bg-zinc-900 flex flex-col items-center">

<h1 className="m-20 lg:pl-20  text-gray-500 text-5xl w-full lg:text-left text-center">
  WHAT I BRING TO
  <span className=" lg:block hidden">
    <br />
  </span>
  <span className="text-white"> YOUR BUSINESS</span>
</h1>


  <div className="w-9/10 smaller bg-gray-500 "></div>

  <div className="text-gray-500 self-start m-15 sm:m-20 flex items-center">[01]

  <div className="text-white text-2xl ml-10 md:ml-20">Website Design</div> 



      <div
      className={`w-100 h-40 mt-15 lg:text-white  text-md xl:text-xl xl:w-150 absolute right-10 
        ${showed ? 'mt-50 left-20 text-white' : ' text-transparent'}`}
    >
      Designing visually appealing, intuitive websites with seamless functionality, optimized performance, and clear navigation for better engagement.
    </div>

      <button 
        disabled={isDisabled}
        onClick={() => {setShowed(!showed) 
                setShowed1(false);
                setShowed2(false);}}
        className="group w-20 h-20 lg:border-transparent lg:hover:bg-transparent bg-transparent border-2 border-white rounded-full text-transparent z-50 hover:bg-white duration-300 text-center absolute right-10 sm:right-20"
        
      >
        <div className="group-hover:lg:text-transparent text-white hover:text-black text-2xl block lg:hidden">+</div>
      </button>
      </div>

  <div className={`w-9/10 smaller bg-gray-500 ${showed  ? 'mt-11':''}`}></div>
<div className="text-gray-500 self-start m-15 sm:m-20 flex items-center">[02]
<div className="text-white text-2xl w-70 sm:w-100 ml-10 md:ml-20">SEO Development</div> 

  <div className={`w-100 h-40 mt-15 lg:text-white text-md xl:text-xl xl:w-150 absolute right-10 
        ${showed1 ? 'mt-50 left-20 text-white' : ' text-transparent'}`}>Building with clean code, proper metadata, semantic HTML, and mobile-first practices to improve visibility on search engines and drive organic traffic.</div> 
 
      
      <button 
        disabled={isDisabled}
        onClick={() => {setShowed1(!showed1)
              setShowed(false);
              setShowed2(false);}}
        className="group w-20 h-20 lg:border-transparent lg:hover:bg-transparent bg-transparent border-2 border-white rounded-full text-transparent z-50 hover:bg-white duration-300 text-center absolute right-10 sm:right-20"
        
      >
        <div className="group-hover:lg:text-transparent text-white hover:text-black text-2xl block lg:hidden">+</div>
      </button>
     </div>  



     <div className={`w-9/10 smaller bg-gray-500 ${showed1  ? 'mt-11':''}`}></div>

  <div className="text-gray-500 self-start m-15 sm:m-20 flex items-center">[03]

  <div className="text-white text-2xl  ml-10 md:ml-20">Mobile Compatibility</div> 
  <div className={`w-100 h-40 mt-15 lg:text-white  text-md xl:text-xl xl:w-150 absolute right-10 
        ${showed2 ? 'mt-50 left-20 text-white' : ' text-transparent'}`}>Ensuring your website delivers a smooth, responsive experience across all devices, with layouts and features that adapt seamlessly to any screen size for maximum accessibility and user retention.</div> 
  
  <button 
        disabled={isDisabled}
        onClick={() => {setShowed2(!showed2)
                        setShowed(false);
                        setShowed1(false);}}
        className="group w-20 h-20 lg:border-transparent lg:hover:bg-transparent bg-transparent border-2 border-white rounded-full text-transparent z-50 hover:bg-white duration-300 text-center absolute right-10 sm:right-20"
        
      >
        <div className="group-hover:lg:text-transparent text-white hover:text-black text-2xl block lg:hidden">+</div>
      </button>
  </div>
  </div>
 

 <div className="h-full relative">
   <img
     src={img2}
     className="w-full h-full object-cover absolute "
   />
   <div className="inset-0 bg-gradient-to-t from-transparent to-zinc-900/100 absolute z-10"></div>
 
 
   <div className="z-10 text-white text-4xl absolute top-20 left-1/2 -translate-x-1/2">MY PROJECTS</div>
 
   <div className="z-10 text-white text-xl absolute top-20 left-1/2 -translate-x-1/2 mt-20">Whether it's a professional blog, a business website, an e-commerce store, or a portfolio site, I offer expert web development and design services that will enhance your online presence and increase your business leads.</div>
 
<motion.img src={img4}
 className="md:w-100 w-70 z-30 absolute right-1/2 translate-x-1/2 md:mt-90 mt-130  grayscale hover:grayscale-0 duration-200"
 initial={{scale:1}}
  whileHover={{scale:1.10}}
  transition={{ type: 'spring', stiffness: 200, damping: 10 }}
 
 />

   <div className="bg-black h-30 w-full absolute bottom-0 z-30"></div>

 </div>

 
 
 <div className="relative h-[300px] lg:h-[600px] overflow-hidden">
   <img
     src={img3}
     className="absolute inset-0 w-full h-auto object-cover brightness-50 -top-10 "
   />
 
 <div className="text-white text-4xl absolute top-20 lg:top-47 left-20 lg:left-50 z-50 ">
     LET'S TALK
 
 
   <div className="text-white text-lg absolute w-120 mt-2 z-50 xl:text-2xl ">
     Let us know how we can assist you with your business goals. Let's sort them out together
   </div>
 
 
 </div>
 
 <motion.button
      initial={{scale:1}}
      whileHover={{scale:1.10}}
      transition={{ type:'keyframes', stiffness: 200, }}
    onClick={handleContact}
    className="text-white text-xl absolute z-50 top-50 xl:top-88 lg:top-77 left-20 lg:left-50 w-[200px] h-[60px] border-2 border-white rounded-2xl hover:bg-white hover:text-black duration-300">
     Let's get Started
   </motion.button>
 
   <svg
     xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     strokeWidth={.4}
     stroke="currentColor"
     className="absolute top-[120px] right-[120px] z-50 w-50 h-50 rotate-30 stroke-transparent lg:stroke-white"
   >
     <path
       strokeLinecap="round"
       strokeLinejoin="round"
       d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
     />
   </svg>
 </div>
 
 


  </div>
    </>
  )

    
}