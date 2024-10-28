import Image from 'next/image'
import React from 'react'
import Logo from '@/public/Logo.png'
import Link from 'next/link'
import Container from './Container'
import Li from './Li'


const Navbar = () => {
    return (
        <>
            <div className='absolute left-0 top-[50px] w-full'>
                <Container className='flex justify-between items-center max-w-[1780px]'>
                    <div className="logo">
                        <Image src={Logo} alt='Logo' />
                    </div>
                    <ul className="menu flex gap-x-[64px] items-center text-[#fff]">
                        <Li litext='Home' go='/' className='text-red-700'/>
                        <Li litext='Blog' go='/blog'/>
                        <Li litext='Post' go='/post'/>
                        <Li litext='Download app' go='#'/>
                        <Li litext='UI screens' go='#'/>
                        <Li litext='Testimonials' go='#'/>
                        <Li litext='FAQ' go='#'/>
                    </ul>
                    <div className="btn">
                        <Link href='#'>Btn</Link>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default Navbar