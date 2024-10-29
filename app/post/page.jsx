// "use client"
// Jodi hook(Like useState, useEffect) use kora lage tahole use client taa uncomment kore dio karon default server component next js a ,,,
import Link from 'next/link'
import React from 'react'
import BredCumb from '../component/layers/BredCumb'
import Container from '../component/layers/Container'

const page = () => {
    return (
        <div className='navBg2'>
         <Container>
            <BredCumb />
         </Container>
        </div>
    )
}

export default page