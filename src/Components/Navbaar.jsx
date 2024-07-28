import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbaar() {
  return (
    <div id='no-print'>
       <div>
        <ul className='flex gap-10 justify-between px-32 py-3 bg-[#264C42]'>
            <li >
                <NavLink
                  className={({isActive})=>`${isActive?"":"" } font-dmSerif w-[165px] h-[24px] text-white text-[24px]`}
                 to='/Home'>ResumeBuilder</NavLink>
            </li>
            <div className='flex gap-10 font-spaceGrotesk  text-[#A1B2AA] text-[16px] py-2'>
            <li >
                <NavLink 
                 className={({isActive})=>`${isActive?"font-extrabold text-white":"" } `}
                to='/Home'>Home</NavLink>
            </li>
            <li >
                <NavLink
                className={({isActive})=>`${isActive?"font-extrabold text-white":"" } `}
                 to='/Templates'>Templates</NavLink>
            </li>
            <li >
                <NavLink 
                 className={({isActive})=>`${isActive?"font-extrabold text-white":"" } `}
                to='/Examples'>Examples</NavLink>
            </li>
            <li  >
                <NavLink
                className={({isActive})=>`${isActive?"font-extrabold text-white border-white":"" }   border rounded-lg px-5 py-1 border-[#A1B2AA]`}
                 to='/Contact'>Contact Us</NavLink>
            </li>
            </div>
            
        </ul>
       </div>
    </div>
  )
}

export default Navbaar
