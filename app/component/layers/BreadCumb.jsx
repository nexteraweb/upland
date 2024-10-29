'use client'
import React from 'react'
import { LuDot } from "react-icons/lu";
import { usePathname } from 'next/navigation'

const BreadCumb = ({ className, three }) => {
  const pathname = usePathname()
  return (
    <>
      <div className={`${className}`}>
        <p className='font-normal text-sm leading-[170%] text-[#b3b1b7] capitalize flex items-center'>Home <LuDot /> {pathname.split("/")[1]}</p>
      </div>
    </>
  )
}

export default BreadCumb
