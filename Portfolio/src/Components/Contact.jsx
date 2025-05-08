import {useState} from 'react';
import Email from './Email';

function Contact({handleAbout, handleSkillset}) {
    const [isHovered, setIsHovered] = useState("Click on a question to see your answer.");

const questions =[
    "The timeline typically ranges from 3 days to 2 weeks, depending on the size and complexity of your project. Smaller sites can be finished quickly, while larger, more detailed websites may take a bit longer to ensure everything functions smoothly. I’ll keep you updated throughout the process so you always know the progress.",
    "Yes — I offer ongoing support and maintenance for every website I build. I’ll be available after launch to handle updates, fixes, and improvements as needed, so your site stays secure, functional, and up-to-date.",
    "My website packages start at $60 for basic builds. Larger or more complex sites may cost more depending on features. There’s also a small monthly fee for hosting and keeping your website online. I’ll give you a clear quote after we review your needs.",
    "Yes — every site I build is fully responsive. Your website will look great and work smoothly on phones, tablets, and desktops, ensuring a consistent experience on all devices.",
]



    return(
        <>
         <div className="absolute z-60 top-0 w-full h-600 bg-white">

         <div className="w-9/10 h-0.5 top-30 left-1/2  bg-gray-500 absolute -translate-x-1/2"></div>

         <button 
         onClick={handleAbout}
         className="absolute sm:left-1/4 left-1/10 top-10 text-4xl">ABOUT</button>
        
        
         <button 
         onClick={handleSkillset}
         className="absolute sm:right-1/4 right-1/10 top-10 text-4xl">SKILLSET</button>


<Email/>



<div className="max-w-1/3 xl:whitespace-nowrap">
<button
    onClick={() => setIsHovered(questions[0])}
    onMouseEnter={() => setIsHovered(questions[0])}
    className="absolute left-10 text-xl hover:bg-gray-200 bg-gray-100 duration-200 flex items-center h-40 lg:h-18 top-300 lg:top-310 rounded-2xl p-4 w-2/5 "
>
    <div className="text-xl">How long will it take to build my website?</div>
</button>

<button
    onClick={() => setIsHovered(questions[1])}
    onMouseEnter={() => setIsHovered(questions[1])}
    className="absolute left-10 text-xl hover:bg-gray-200 bg-gray-100  duration-200 flex items-center h-40 lg:h-18 top-345 lg:top-330 rounded-2xl p-4 w-2/5"
>
    <div className="text-xl">Do you offer ongoing support or maintenance?</div>
</button>

<button
    onClick={() => setIsHovered(questions[2])}
    onMouseEnter={() => setIsHovered(questions[2])}
    className="absolute left-10 text-xl hover:bg-gray-200 bg-gray-100  duration-200 flex items-center h-40 lg:h-18 top-390 lg:top-350  rounded-2xl p-4 w-2/5"
>
    <div className="text-xl">Whats price point are we looking at?</div>
</button>

<button
    onClick={() => setIsHovered(questions[3])}
    onMouseEnter={() => setIsHovered(questions[3])}
    className="absolute left-10 text-xl hover:bg-gray-200 bg-gray-100  duration-200 flex items-center h-40 lg:h-18 top-435 lg:top-370 rounded-2xl p-4 w-2/5"
>
    <div className="text-xl">Will my website work on phones and tablets?</div>
</button>
</div>



<div className="absolute right-10 lg:top-300 top-290 max-w-2/5 bg-gray-900 shadow-2xl rounded-2xl lg:h-100 h-164 mt-17 lg:mt-0 text-white p-4 flex flex-col items-center">
<div className="w-9/10 h-0.5 top-10 left-1/2  bg-gray-800 absolute -translate-x-1/2"></div>
<div className="mt-8 xl:text-xl">{isHovered}</div>
        

        <div className="w-9/10 h-0.5 bottom-10 left-1/2  bg-gray-800 absolute -translate-x-1/2"></div>
    </div>


<div className="absolute bg-green-950 w-full h-100 bottom-0 overflow-hidden">
    <div className="text-white text-8xl tracking-tight -mt-16 -ml-8 overflow-hidden">
    A U S T I N S U K H O V A U S T I N S U K H O V A U S T I N S U K H O V A U S T I N S U K H O V A U S T I N S U K H O V A U S T I N S U K H O V A U S T I N S U K H O V A U S T I N S U K H O V A U S T I N S U K H O V A U S T I N S U K H O V

    </div>
</div>

        </div>
        </>
    )}
  export default Contact;