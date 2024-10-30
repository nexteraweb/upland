// "use client"
// Jodi hook(Like useState, useEffect) use kora lage tahole use client taa uncomment kore dio karon default server component next js a ,,,
import React from 'react'
import BredCumb from '@/app/component/layers/BredCumb'
import PostContent from '../component/PostContent'

const page = () => {
    return (
        <div>
            <BredCumb />
            <PostContent/>
         
        </div>
    )
}

export default page