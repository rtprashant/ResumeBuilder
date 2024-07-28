import React from 'react'
import { NavLink } from 'react-router-dom'
import laptopImg from '../assets/laptop-removebg.png'
import Example from '../assets/Example2.jpg'

function Hero() {
    return (
        <div className='bg-[#264C42]  justify-center pt-32 h-[1500px] overflow-x-hidden '>
            <div className='flex justify-center'>
                <div className='h-[160px] w-[733px]  flex justify-center '>
                    <div className=' text-[58px]  text-[#FDFEFE] font-staatliches'>
                        <h1>BUILD YOUR PROFESSIONAL RESUME </h1>
                        <h1 className='flex justify-center'>IN MINUTES</h1>
                    </div>

                </div>

            </div>
            <div className='flex justify-center pt-5 font-spaceGrotesk text-[#B4C6BB]'>
                <div className='h-[24px] w-[1293.3px]  flex justify-center text-[20px] '>
                    <h3>Create A Standout Resume That Gets You Notice</h3>

                </div>
            </div>

            <div className='flex justify-center pt-[40px]'>
                <div className='w-[400px] h-[40px]  font-spaceGrotesk flex gap-[28px]'>
                    <NavLink to="/Templates">
                    <div className='w-[164px] h-[40px] border rounded-full justify-center text-[15px] text-[#B5C4BC] items-center flex hover:cursor-pointer'>
                        Create Resume
                    </div>
                    </NavLink >
                    <NavLink to="/Templates">
                    <div className='w-[208px] h-[40px] border rounded-full justify-center text-[15px] text-[#818286] items-center flex hover:cursor-pointer bg-[#FEFEFE]'>
                        Download Resume
                    </div>
                    </NavLink>

                </div>

            </div>

            <div className='flex justify-center pt-10'>
                
                <div className='w-[346px] h-[275px] mt-[65px] bg-white absolute z-0 mr-44 '> 
                    <h3 className='w-[346px] h-[16px] font-spaceGrotesk text-[13px] text-[#726F71] pt-10 pl-10'>Effortlessly Craft Your Ideal Resume</h3>
                    <div className='w-[346px] h-[258px]  font-spaceGrotesk flex'>
                        <div className='w-[21.7%] h-[117px]  pt-7  ml-10'>
                            <ul className='font-spaceGrotesk '>
                                <li className='text-[6px] text-[#A9A8AA]'>Resume Builder</li>
                                <li className='text-[9px] text-[#A5A2A3]'>Resume</li>
                                <li className='text-[9px] text-[#A5A2A3]' >Cover</li>
                                <li className='text-[9px] text-[#A5A2A3]'>Job Search</li>
                                <li className='text-[9px] text-[#A9A8AA]'>Interview Tips</li>
                                <li className='text-[9px] text-[#A5A2A3]'>Career Advicce</li>
                                <li className='text-[9px] text-[#A9A8AA]'>Take The First</li>
                                <li className='text-[9px] text-[#A5A2A3]'>Step Towards</li>
                            </ul>

                        </div>
                        <div className='w-[59.54%] h-[238px] ml-[18.50%] pt-[20px]  font-spaceGrotesk'>
                            <ul>
                                <li className='text-[15px] text-[#818083]'>Get Started</li>
                                <li className='text-[8px] text-[#7c797B]'>Our Resume Builder Simplifies The Process, Helping You Craft A Professional Resume That Showcase Your Skills And</li>
                                <li className='text-[9px] text-[#747173] mt-[13px]'>Resume Tips</li>
                                <li className='text-[12px] text-[#928E85] mt-[11px]'>Personalize Your Resume To Match Your Unique</li>
                                <li></li>
                                <li></li>
                            </ul>

                        </div>
                        <img  className="ml-[345px] mt-[-39px] h-[280px] w-[185px] absolute " src={Example} alt="" />
                    </div>
                </div>
                
                
                
                <div className='w-[856px] h-[422px] z-10  '>
                    <img className='w-[856px] h-[422px] bg-cover ' src={laptopImg} alt="" />
                </div>
                
            </div>

            <div className='flex w-[1301px] h-[416px] mt-[120px] ml-[100px] pb-[10vw] justify-between'>
                <div className='flex flex-col gap-10'>
                    <div className='h-[32px] w-[367px]  mt-[100px] ml-[3.81%] font-spaceGrotesk text-[21px] text-[#F3F3F4] font-semibold'>Home</div>
                    <div className='h-[180px] w-[367px]  ml-[3.81%] text-[17px] text-[#C4CFCC] font-spaceGrotesk'>Transform Your Job Search With Our Seamless Resume Builder - Crafting A Resune Has Never Been Easier. Showcase Your Skills ,Achievments and Experince To Impress Potential Employers And Unlock New Opportunities</div>
                </div>
                <div className='flex flex-col gap-10'>
                    <div className='h-[32px] w-[367px]  mt-[100px] ml-[vw]  font-spaceGrotesk text-[21px] text-[#F3F3F4] font-semibold'>About Us</div>
                    <div className='h-[180px] w-[367px]  ml-[vw]  text-[17px] text-[#C4CFCC] font-spaceGrotesk'>We Understand That A Resume Is More Than Just A Aocument—it's A Crucial Tool That Opens Doors To Your Future Opportunities. That's Why We've Developed A User-Friendly Interface That Allows You To Craft Personalized, Visually Appealing Resumes In Just A Few Clicks. </div>
                </div>
                <div className='h-[396px] w-[300px] bg-[#EADED5]'>
                    <img className=" h-[200px] w-[150px] mt-11 ml-6" src={Example} alt="" />

                </div>
            </div>

            
            
            


        </div>
    )
}

export default Hero
