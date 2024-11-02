import React from 'react'

const Section1 = () => {
  return (
    <div className='px-20 py-10'>
    <div className='flex flex-col items-left gap-5 mb-5'>
            <p className='text-lg text-zinc-900'>The Social Impact Communications Agency</p>
            <h1 className='text-7xl text-amber-500 leading-tight'>IMPACT THROUGH <br /> COMMUNICATIONS</h1>
    </div>

    <div className='flex justify-end pr-20'>
        <h1  className=' text-3xl font-thin text-zinc-900 leading-normal mb-8'>We propel change-makers to create a fairer world <br />faster by maximising the power of social impact and 
            <br />sustainability communications to shape the history of <br /> tomorrow, today.</h1>
    </div>
    <div className='flex justify-end pr-20'>
       <h1 className=' text-3xl font-thin text-zinc-900 leading-normal'> As a <span className='font-bold'> B Corp Certified, majority women & LGBTI+ <br /> owned independent </span>agency, we work with purpose- <br />led companies, philanthropic institutions, ESG
       <br /> innovators, 
        charities, and global campaigns on the <br />biggest issues facing humanity today.</h1>
    </div>
    </div>
  )
}

export default Section1