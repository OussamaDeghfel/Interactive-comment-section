import React from 'react'

const Action = ({handleClick, type}) => {
  return (
    <div onClick={handleClick}>
        {type}
    </div>
  )
}

export default Action