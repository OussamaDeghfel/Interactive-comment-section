import React from 'react'
import leva from "../assets/leva-pic.png"

const MyComment = () => {
  return (
    <div className='flex space-x-5 items-start'>
        <img src={leva} alt="" className='w-[30px] h-[30px] rounded-full'/>
        <input type="text" placeholder='Add a comment...' className='w-[550px] h-[100px] flex items-start border-2 border-gray-200 rounded-md p-2' />
        <button className='p-2 bg-blue-900 rounded-md font-medium text-white'>Send</button>
    </div>
  )
}

export default MyComment