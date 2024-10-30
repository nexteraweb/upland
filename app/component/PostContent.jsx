import React from 'react'
import Container from './layers/Container'
import { roboto } from '../layout'
import { LuDot ,LuShare2 } from "react-icons/lu";


const PostContent = () => {
    return (
        <div>
            <Container>
                <div>
                    <div className='relative w-[828px] h-[400px] bg-[#E6EBFC] rounded-[20px]'>
                        <div className='p-4 bg-[#FF6231] rounded-t-[10px] absolute left-10 bottom-0 flex flex-col items-center'>
                            <p className={`${roboto.className} font-medium text-sm text-white uppercase`}>Dec</p>
                            <h1 className={`${roboto.className} font-bold text-[28px] text-white`}>10</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-3 pt-[30px]'>
                        <div className='flex items-center gap-x-2.5'>
                            <div className='w-5 h-5 bg-[#CEA6DC] rounded-full'></div>
                            <h2 className={`${roboto.className} font-medium text-base leading-[170%] text-[#000000]`}>Leslie Alexander</h2>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <LuDot className='text-[#FF6231] text-2xl' />
                            <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>Mobile</p>
                            <LuDot className='text-[#FF6231] text-2xl' />
                        </div>
                        <div>
                           <div className='flex items-center gap-x-2.5'>
                           <LuShare2 className='text-[#888888]' />
                           <p className={`${roboto.className} font-normal text-sm leading-[170%] text-[#888888]`}>Share</p>
                           </div>
                        </div>
                    </div>
                    <div className='pt-[30px] border-b-2 border-dashed border-[#5437b246]'></div>
                    <div>
                        <h1 className='font-Darker font-semibold text-[36px] text-[#000000] capitalize'>a selection of the best apps for 2020</h1>
                    </div>
                </div>
                <div>

                </div>
            </Container>
        </div>
    )
}

export default PostContent