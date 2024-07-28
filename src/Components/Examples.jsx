import React from 'react'
import '../index.css'
import exmapleImg from '../assets/Example3.jpg'
import firstImg from '../assets/Exampe1.jpg';
import secondImg from '../assets/Example2.jpg';
import thirdImg from '../assets/Example3.jpg';
import fourthImg from '../assets/home1.jpg';
import fifthImg from '../assets/home2.jpg';

function Examples() {
  return (
    <div className='w-full h-[2000px] overflow-x-hidden'>
        <div className='h-[864px] bg-white relative'>
            <div className='h-[500px] bg-[#264C42] shadow-xl shadow-black'></div>
            <div className='h-[764px] w-[78vw] bg-white shadow-xl shadow-black ml-80 mt-[-23vw] absolute flex'>
                <div className='h-full w-[15%] bg-[#2B2A2F]'></div>
                <img className=" h-[500px] w-[350px] ml-20 mt-32 " src={exmapleImg} alt="" />
                <div className='h-[400px] w-[400px] ml-44 mt-52 '>
                    <h1 className='font-staatliches text-[44px] text-[#232223]'>RESUME EXAMPLES</h1>
                    <p className='font-spaceGrotesk text-[16px] w-[95%] text-[#656E72]'>Find Inspiration and Guidance for Your Resume with Our Extensive Collection of Resume Examples</p>
                    <p className='font-spaceGrotesk text-[16px] w-[95%] text-[#656E72] mt-20'>Discover How Our Resume Builder Can Help You Create a Resume That Gets Results - Craft a Polished</p>
                </div>
                

            </div>
            <div className='flex'>
            <div className='circle mt-[40vw] ml-[2vw] shadow-xl shadow-black'>
              <img className='h-[350px] w-[250px] ml-[5vw] mt-[3vw]' src={firstImg} alt="" />
            </div>

           
            <div className='circle mt-[50vw] z-30 ml-[43vw] shadow-xl shadow-black'>
              <img className='h-[360px] w-[250px] ml-[4vw] mt-[3vw]' src={secondImg} alt="" />
            </div>

            </div>
            <div className='h-[500px] w-[400px]  ml-[37vw] mt-[-35vw]'>
              <h1 className='font-staatliches text-[44px] text-[#232223]'>RESUME EXAMPLES</h1>
              <p className='font-spaceGrotesk mt-11 text-[#656E72]'>We Understand That A Resume Is More Than Just A Aocument—it's A Crucial Tool That Opens Doors To Your Future Opportunities. That's Why We've Developed A User-Friendly Interface That Allows You To Craft Personalized, Visually Appealing Resumes In Just A Few Clicks.</p>
            </div>
        </div>
        

      
    </div>
  )
}

export default Examples
