import React from 'react'

const Hero = (props) => {
  return (
    <div className={props.modal ? 'mx-8 flex flex-col  mt-40 gap-10 blur-sm' : 'mx-8 flex flex-col  mt-40 gap-10'}>
      <p className='text-sm text-[#D6D6D6] w-96 text-center mx-auto'>AI-powered system suggests personalized content based on user preference</p>
        <div className='flex justify-between items-center '>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col text-2xl'>
                <h1 className='font-semibold'>93m+</h1>
                <p className='text-[15px] text-[#979797]'>Total sdf files</p>
              </div>
              <hr />
              <div className='flex flex-col text-2xl'>
                <h1 className='font-semibold'>3.2b</h1>
                <p className='text-[15px] text-[#979797]'>Not yet secured files</p>
              </div>
            </div>
            <div className='text-5xl font-semibold w-[1000px] text-center'>
              <h1>Turn Files into Privacy Driven <span className='text-[#69BD71]'>Self Destructuring</span>  Vaults</h1>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col text-2xl'>
                <h1 className='font-semibold'>1k+</h1>
                <p className='text-[15px] text-[#979797]'>Awards</p>
              </div>
              <hr />
              <div className='flex flex-col text-2xl'>
                <h1 className='font-semibold'>221k</h1>
                <p className='text-[15px] text-[#979797]'>Transaction Daily</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero