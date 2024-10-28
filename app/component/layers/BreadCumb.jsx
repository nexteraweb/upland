'use client'
import React from 'react'
// import { MdKeyboardArrowRight } from "react-icons/md";
import { usePathname } from 'next/navigation'

const BreadCumb = ({className,three}) => {
    const pathname = usePathname()
  return (
    <>  <div className={` ${className}`}>
            <p>Home - {pathname.split("/")[1]}</p>
        </div>
    </>
  )
}

export default BreadCumb