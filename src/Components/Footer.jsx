import React from 'react'

function Footer() {
  return (
    <div id='no-print'
    className='h-[400px] bg-[#150923] flex justify-evenly'>
      <div className='h-[250px] w-[211px]  mt-24'>
        <p className='h-[64] w-full  font-spaceGrotesk text-[16px] text-[#695E6C] mt-48'>
© 2024 ResumeBuilder, Inc.
All rights reserved.
</p>
      </div>
      <div className='h-[200px] w-[929px]  mt-24 flex justify-between font-spaceGrotesk'>
        <div className='h-full w-[30%]  '>
            <ul >
                <li className='mt-4 text-[#695E6C] text-[15px]'>Resources</li>
                <li className='mt-4 text-[#695E6C] text-[16px]'>Blog</li>
                <li className='mt-4 text-[#695E6C] text-[16px]'>FAQ</li>
                <li className='mt-4 text-[#695E6C] text-[16px]'>Privacy</li>
                <li className='mt-4 text-[#695E6C] text-[16px]'>Terms</li>
            </ul>
        </div>
        <div className='h-full w-[30%] '>
        <ul>
                <li className='mt-4 text-[#695E6C] text-[15px]'>Company</li>
                <li className='mt-4 text-[#695E6C] text-[16px]'>About</li>
                <li className='mt-4 text-[#695E6C] text-[16px]'>Carrers</li>
                <li className='mt-4 text-[#695E6C] text-[16px]'>Legal</li>
                <li className='mt-4 text-[#695E6C] text-[16px]'>Conatct</li>
            </ul>
        </div>
        <div className='h-full w-[30%] '>
        <ul>
                <li className='mt-4 text-[#695E6C] text-[15px]'>Support</li>
                <li className='mt-4 text-[#695E6C] text-[16px]'>FAQ</li>
                <li className='mt-4 text-[#695E6C] text-[16px]'>Terms</li>
                <li className='mt-4 text-[#695E6C] text-[16px]'>Privacy</li>
                <li className='mt-4 text-[#695E6C] text-[16px]'>Contact</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
