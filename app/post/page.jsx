"use client"
import Image from 'next/image'
// Jodi hook(Like useState, useEffect) use kora lage tahole use client taa uncomment kore dio karon default server component next js a ,,,
import Link from 'next/link'
import React from 'react'
import BredCumb from '../component/layers/BredCumb'
import a from '/public/navBackgroumd.png'
import Container from '../component/layers/Container'

const page = () => {
    return (
        <div className='bg-blue-400'>
            <Container>
                <BredCumb />
            </Container>
        </div>
    )
}

export default page