import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const Comment = () => {
  const [vote, setVote] = useState(0)
  return (
    <div>
      <div className='bg-gray-400 rounded-md flex flex-col w-[45px] h-full p-4 justify-between'>
        <FaPlus onClick={() => setVote(vote+1)} size={10} />
        <span className='text-2xl'>{vote}</span>
        <FaMinus onClick={() => setVote(vote+1)} size={10} />
      </div>
    </div>
  )
}

export default Comment