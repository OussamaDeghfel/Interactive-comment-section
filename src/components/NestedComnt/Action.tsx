import React from 'react'

const Action = ({handleClick, type}) => {
  return (
    <div className='m-1 border-2 p-1 rounded-md border-gray-500 cursor-pointer' onClick={handleClick}>
        {type}
    </div>
  )
}

export default Action