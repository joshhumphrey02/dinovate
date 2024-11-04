
import Image from 'next/image'
import React from 'react'

const Section3 = () => {
  return (
    <div className='flex px-20'>
        <div className='mr-24 '>
        <Image height={50} width={1200} alt="" src="/images/1f680.svg" className='pt-5' />
        </div>
      <div className='pr-10'>
        <h1 className='text-3xl mb-7'>We don’t just do social impact, we live and breathe it.</h1>
        <p className='text-md leading-relaxed mb-5'>We’re a bit different to your standard agency! We blend commercial creativity with a strategic, authentic understanding of how to affect positive change and tackle social issues with cultural sensitivity & integrity. Our team of researchers, strategists, digital ninjas, creatives and movement builders collaborate with brands, NGOs, and institutions to maximise the power of 
            communications to shape the history of tomorrow, today, both in the Global North & South. </p>
            <p className='text-md leading-relaxed'>From public health to gender equality, climate action to driving policy change, and everything in between, we maximise the power of strategy and communications to
                 progress the 2030 Agenda. Find out more about our expertise below:</p>
        
      </div>

    </div>
  )
}

export default Section3