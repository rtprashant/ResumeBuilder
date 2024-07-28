import React from 'react'


function ContactUs() {
  return (
    <div className='h-[1200px]'>
      <div className='h-[500px] bg-[#264C42] shadow-xl shadow-black'>
        <div className='flex justify-center'>
        <h1 className='font-staatliches text-[10vh] mt-20 text-white'>WE ARE HERE TO HELP</h1>
        </div>
        <div className='flex justify-center h-[100px] w-[50%] ml-[25vw]  '>
        <p className='font-spaceGrotesk text-[20px] flex justify-center  text-center text-[#656E72]'>Whether you have a question about our features, pricing, need a demo, or anything else, our team is ready to answer all your questions.</p>
        </div>
        <div className='h-[100px] w-[40%]  mt-10 flex  ml-[29vw] justify-between'>
        <div>
        <h1 className='font-staatliches text-black text-[17px]'>E Mail :</h1>
        <p className='font-spaceGrotesk text-blue-700 text-[15px] mt-3'>info@resumebuilder.com</p>
        <p className='font-spaceGrotesk text-blue-700 text-[15px]'>support@resumebuilder.com</p>
        </div>
        <div>
        <h1 className='font-staatliches text-black text-[17px]'>Phone :</h1>
        <p className='font-spaceGrotesk text-[#656E72] text-[15px] mt-3'>+1 (123) 456-7890</p>

        </div>
      </div>
      </div>
      <div>
      <div class="flex flex-col items-center justify-center h-screen dark mt-[-4vw]">
  <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold text-gray-200 mb-4 ">Contact Us</h2>

    <form class="flex flex-wrap">
      <input
        type="text"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
        placeholder="Full Name"
      />
      <input
        type="email"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
        placeholder="Email"
      />
      <input
        type="number"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
        placeholder="Phone Number"
      />
      {/* <input
        type="text"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
        placeholder="Company Name"
      /> */}
      {/* <input
        type="text"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
        placeholder="Job Title"
      /> */}
      <input
        type="date"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
        placeholder="Date of Birth"
      />
      <textarea
        name="message"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
        placeholder="Message"
      ></textarea>

      <button
        type="submit"
        class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
      >
        Submit
      </button>
    </form>
  </div>
</div>

      </div>
     
     
       
    </div>
  )
}

export default ContactUs
