import Link from 'next/link'
import React from 'react'
import {Roboto} from 'next/font/google'

const roboto = Roboto({
    weight:'400',
    subsets:['latin'],
    display:'swap'
})

const Li = ({litext,go,className}) => {
  return (
   <li>
    <Link href={go} className={`font-normal text-base leading-[170%] text-[#fff] roboto  ${roboto.className} ${className}`}>{litext}</Link>
   </li>
  )
}

export default Li