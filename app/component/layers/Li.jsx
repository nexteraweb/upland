import Link from 'next/link'
import React from 'react'

const Li = ({litext,className,go}) => {
  return (
   <li>
    <Link href={go} className={`font-normal text-base leading-[170%] text-[#fff] font-Darker ${className}`}>{litext}</Link>
   </li>
  )
}

export default Li