import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between pr-10 py-10 items-center'>
        <div className='flex items-center gap-5'> <Image height={100} width={100}  src="/images/menu-logo-line.svg" alt="" /> <Image height={100} width={100}  src="/images/200721_shape-history_logo_dark.webp" alt="" />  </div>
        <div> <Image height={50} width={50}  src="/images/ham.svg" alt="" /> </div>
    </div>
  )
}

export default Header