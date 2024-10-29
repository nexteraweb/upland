import React from 'react'
import '../../post/post.css'
import Link from 'next/link'
import { codystar, roboto } from '@/app/layout'
import Image from 'next/image'
import navBg2 from '../../../public/navBg2.png'

const BredCumb = () => {
  return (
    <div className='pt-[159px] pb-[181px]'>
        <h2 className='font-Darker font-semibold text-6xl text-white capitalize'>{window.location.pathname.split("/") [1]}</h2>
        <div className='flex gap-x-3 pt-[30px]'>
          <Link className={`${roboto.className} font-normal text-sm text-[#B3B1B7]`} href={'/'}>Home</Link>
          <p className={`${roboto.className} font-normal text-sm text-[#B3B1B7] capitalize`}>{window.location.pathname.split("/")[1]}</p>
        </div>
        <h3 className={`${codystar.className} font-normal text-[120px] uppercase text-[#CCCCCC] absolute left-[71px] top-[230px]`}>{window.location.pathname.split("/")[1]}</h3>
    </div>
  )
}

export default BredCumb