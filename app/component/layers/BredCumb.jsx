import React from 'react'

const BredCumb = () => {
  return (
    <div>
        <h2 className='font-Darker font-semibold text-6xl text-white'>{window.location.pathname.split("/") [1]}</h2>
    </div>
  )
}

export default BredCumb