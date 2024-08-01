import React from 'react'
import { BusinessContext } from '../Business/BusinessContext'
import Form from './MarketingForm'
import MaketingContent from './MaketingContent'



function Marketing() {
  return (
    <BusinessContext>
      <div >
        <div className='h-56 pt-32 bg-[#264C42] shadow-xl  shadow-black' id='no-print'>
          <div className='flex justify-center'>
            <h1 className='font-spaceGrotesk text-white text-[50px]'>FILL BELOW DETAILS AND GET YOUR RESUME</h1>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-2 mt-32'>
          <div id='no-print'>
            <Form />
          </div>
          {/* <Form /> */}
          <div id="print">
            <MaketingContent/>
          </div>
         
        

        </div>


      </div>
    </BusinessContext>

  )
}

export default Marketing
