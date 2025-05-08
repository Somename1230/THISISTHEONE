import {useState} from 'react';
import {motion} from "framer-motion"

import Contact from './Components/Contact';
import Master from './Master';
import Skillset from './Components/Skillset';

import './index.css'

function App() {
  const [page,setPage]=useState("about");

const pageVariants={
  initial:{opacity:0,y:20},
  animate:{opacity:1,y:0},
  exit:{opacity:0,y:-20}
}





  function handleContact() {
    setPage("contact")
    window.scrollTo(0, 0);
  }

  function handleSkillset() {
    setPage('skillset')
    window.scrollTo(0, 0);
  }
  function handleAbout() {
    setPage("about")
    window.scrollTo(0, 1200);
  }

  return (
    <>
<div className="font-roboto">


{page==='contact' && (
  <motion.div
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={{ duration: 0.4 }}
  >
    <Contact handleAbout={handleAbout} handleSkillset={handleSkillset} />
  </motion.div>
)}

{page==='skillset' && (
  <motion.div
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={{ duration: 0.4 }}
  >
  <Skillset handleAbout={handleAbout} handleContact={handleContact}/>
  </motion.div>
)}




{page==='about' && <Master 
handleContact={handleContact} 
handleAbout={handleAbout} 
handleSkillset={handleSkillset}/>}



 </div>
     </>
   );
 }
 
 export default App;