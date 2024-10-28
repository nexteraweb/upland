'use client'
import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePathname } from 'next/navigation'

const BreadCumb = ({className,three}) => {
    const pathname = usePathname()
  return (
    <>  <div className={` ${className}`}>
            <p>Home <MdKeyboardArrowRight className='inline-block'/> {pathname.split("/")[1]}</p>
        </div>
    </>
  )
}

export default BreadCumb
