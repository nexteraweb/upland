import Image from 'next/image'
import React from 'react'
import Logo from '@/public/Logo.png'
import Link from 'next/link'
import Container from './Container'

const Navbar = () => {
    return (
        <>
  
            <div className='flex justify-between items-center'>
                <div className="logo">
                    <Image src={Logo} alt='Logo'/>
                </div>
                <ul className="menu flex gap-x-2 items-center">
                    <li><Link href='#'>Home</Link></li>
                    <li><Link href='#'>Home</Link></li>
                    <li><Link href='#'>Home</Link></li>
                    <li><Link href='#'>Home</Link></li>
                    <li><Link href='#'>Home</Link></li>
                    <li><Link href='#'>Home</Link></li>
                    <li><Link href='#'>Home</Link></li>
                    <li><Link href='#'>Home</Link></li>
                </ul>
                <div className="btn">
                    <Link href='#'>Btn</Link>
                </div>
            </div>

        </>
    )
}

export default Navbar