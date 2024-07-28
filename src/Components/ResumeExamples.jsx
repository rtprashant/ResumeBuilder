import React from 'react'
import exmapleImg from '../assets/Example3.jpg'

function ResumeExamples() {
  return (
    <div className='w-full h-[1471px] overflow-x-hidden'>
        <div className='h-[864px] bg-white'>
            <div className='h-[500px] bg-[#3E4965] shadow-xl shadow-black'></div>
            <div className='h-[764px] w-[78vw] bg-white shadow-xl shadow-black ml-80 mt-[-28vw] absolute flex'>
                <div className='h-full w-[15%] bg-[#2B2A2F]'></div>
                <img className=" h-[500px] w-[350px] ml-20 mt-32 " src={exmapleImg} alt="" />
                <div className='h-[400px] w-[400px] ml-44 mt-52 '>
                    <h1 className='font-staatliches text-[44px] text-[#232223]'>RESUME EXAMPLES</h1>
                    <p className='font-spaceGrotesk text-[16px] w-[95%] text-[#656E72]'>Find Inspiration and Guidance for Your Resume with Our Extensive Collection of Resume Examples</p>
                    <p className='font-spaceGrotesk text-[16px] w-[95%] text-[#656E72] mt-20'>Discover How Our Resume Builder Can Help You Create a Resume That Gets Results - Craft a Polished</p>
                </div>
                

            </div>
        </div>
        <div className='w-[80%] h-[464px] ml-60 mt-32 flex gap-[5%] '>
            <div className='w-[30%] h-[464px] '>
                <h1 className='mt-11 font-staatliches text-[26px] text-[#191718]'>PRICING</h1>
                <p className='mt-8 font-spaceGrotesk w-[95%] text-[18px] text-[#6B696D]'>Unlock the Power of Our Affordable Resume Builder - Craft a Professional, Personalized Resume That Showcases Your Qualifications  </p>
            </div>
            <div className='w-[30%] h-[464px]'>
            <h1 className='mt-11 font-staatliches text-[26px] text-[#191718]'>FAQ</h1>
            <p className='mt-8 font-spaceGrotesk w-[95%] text-[18px] text-[#6B696D]'>Get Answers to Your Resume Building Questions and Learn How Our Tools Can Help You Achieve Your Career Goals</p>
            </div>
            <div className='w-[30%] h-[464px]'>
            <h1 className='mt-11 font-staatliches text-[26px] text-[#191718]'>TERMS</h1>
            <p className='mt-8 font-spaceGrotesk w-[95%] text-[18px] text-[#6B696D]'>Understand Our Resume Builder's Terms and Conditions to Ensure a Smooth, Hassle-Free Experience</p>
            </div>
        </div>

      
    </div>
  )
}

export default ResumeExamples
                                      