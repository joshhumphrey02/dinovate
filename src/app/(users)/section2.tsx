import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const Section2 = () => {
  return (
    <div className='flex justify-center gap-20 px-20 py-10'>
        <Card className='w-80 border border-none'>
           <CardContent className='px-0 py-0 '>
            <Image width={600} height={600} alt='' src="/images/200709_shape-homepage_strategy.webp" className='mb-4'/>
            <h2 className='text-3xl text-center font-bold text-amber-500 mb-4'>IMPACT <br /> CONSULTANCY</h2>
            <p className='text-center text-md leading-relaxed'>We build insight-driven strategies to maximise your impact with communications, navigating the social,
                 economic and political complexities of 
                everything from organisational transformation to behaviour and policy change.</p>
           </CardContent>
        </Card>

        <Card className='w-80 border border-none'>
           <CardContent className='px-0 py-0 border-none'>
            <Image width={600} height={600} alt='' src="/images/200709_shape-homepage_campaign.webp" className='mb-4'/>
            <h2 className='text-3xl text-center font-bold text-amber-500 mb-4'>PURPOSE <br /> COMMUNICATIONS</h2>
            <p className='text-center text-md leading-relaxed'>We create bold, award-winning campaigns and marketing activations,
                 underpinned by authentic, inclusive and creative storytelling that elevates reputation, drives action, and accelerates impact.</p>
           </CardContent>
        </Card>

        <Card className='w-80 border border-none'>
           <CardContent className='px-0 py-0 '>
            <Image width={600} height={600} alt='' src="/images/200709_shape-homepage_brand.webp" className='mb-4'/>
            <h2 className='text-3xl text-center font-bold text-amber-500 mb-4'>INNOVATION  <br /> STUDIO</h2>
            <p className='text-center text-md leading-relaxed'>We craft pioneering, equitable, accessible brand identities, digital experiences and content,
                 communicating why you exist and what you stand for to your community in new and thought provoking ways.</p>
           </CardContent>
        </Card>



    </div>
  )
}

export default Section2