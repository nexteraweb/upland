// "use client"
import Image from 'next/image'
// Jodi hook(Like useState, useEffect) use kora lage tahole use client taa uncomment kore dio karon default server component next js a ,,,
import Link from 'next/link'
import React from 'react'
import BredCumb from '../component/layers/BredCumb'
import Container from '../component/layers/Container'

const page = () => {
    return (
        <div>
         
         <Link href='#'>Ho</Link>
         {/* <Image src={Logo} alt='Logo' width={100} height={100}/> */}
        </div>
    )
}

export default page