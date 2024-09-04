import React from 'react'

const Button = (props) => {

  return (
    <div className={props.modal ? 'flex items-center blur-sm justify-center mt-48 mx-auto' : 'flex items-center justify-center mt-48 mx-auto'}>
      <div className='rounded-md shadow-xl bg-[#69BD71] px-40 py-6'>
        <label className='cursor-pointer text-black'>
          Browse file
          <input 
            type="file" 
            className='hidden' 
            onChange={props.handleFileChange} 
            ref={props.fileInputRef}
          />
        </label>
      </div>
    </div>
  )
}

export default Button;
