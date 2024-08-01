
import React , {useState} from 'react'
import { NavLink } from 'react-router-dom';



function ResumeCards({img , templateId}) {
    const [isHoverd, setIsHoverd] = useState(false);
  

    const mouseEnter = () => setIsHoverd(true)
    const mouseLeave = () => setIsHoverd(false)


  return (
    <div
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className="relative h-[38vw]  whitespace-normal w-[25vw] ml-3 mt-10 cursor-pointer bg-white bg-opacity-50 shadow-lg rounded-lg p-6 bg-blend-soft-lighten">


            <div><img className="h-[30vw] w-[]" src={img} alt="" /></div>
            <div className='flex justify-center mt-10  text-[1.5vw] '><h1></h1></div>
            <div className='mt-[-20vw] ml-[4vw]'>
            <NavLink 
                  to={`/${templateId}`} >
                    <button
                    className={`cursor-pointer text-[#264C42] font-bold relative bg-white text-[14px] w-[15em] h-[3em] text-center rounded-full border border-[#264C42] "
  ${isHoverd ? "opacity-100" : "opacity-0"}`}>
                    START BUILDING YOURS  
                </button> </NavLink>

            </div>


        </div>
  )
}

export default ResumeCards
