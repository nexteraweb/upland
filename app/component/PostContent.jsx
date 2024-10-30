import React from 'react'
import Container from './layers/Container'
import { roboto } from '../layout'
import { LuDot, LuShare2 } from "react-icons/lu";


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
                        <div className='max-w-[828px] pt-6 pb-10'>
                            <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888]`}>There’s such a thing as “too much information”, especially for the companies scaling out their sales operations. That’s why Attentive was born in 2015 help sales teams make their increasing pipelines simpler to manage. Indeed, the small, Portugal-based team is itself focused on scaling, having much participated in accelerator
                            </p>
                            <p className={`${roboto.className} font-normal text-base leading-[170%] text-[#888888] pt-5`}>
                                In this episode, Attentive founder Robert Fox talks about what it takes to build a tech new product from the ground up. Discover their approach to running an engineering team, from adopting new open source technologies, to onboarding junior developers and learning .
                            </p>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </Container>
        </div>
    )
}

export default PostContent