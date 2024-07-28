import React from 'react'
import Form from './Form'
import Content from './Content'
import { BusinessContext } from './BusinessContext'
import BusinessPreview from './BusinessPreview'

function BusinessManagement() {
  const handleDowmload =()=>{
    window.print()
  }
  return (
    
    <BusinessContext>

   
      <div >
        <div className='h-56 pt-32 bg-[#264C42] shadow-xl shadow-black' id='no-print'>
        <div className='flex justify-center'>
        <h1 className='font-spaceGrotesk text-white text-[50px]'>FILL BELOW DETAILS AND GET YOUR RESUME</h1>
        <div>
       <button className='text-blue-500'
       onClick={handleDowmload}>Download</button>
        </div>
        </div>
        </div>
        <div className='grid grid-cols-2 mt-32'>
          <div id='no-print'>
            <Form />
          </div>
        {/* <Form /> */}
        <div id="print">
          <Content />
        </div>
        {/* <Content /> */}

        </div>
        
        
      </div>
      </BusinessContext>

  

  )
}

export default BusinessManagement
