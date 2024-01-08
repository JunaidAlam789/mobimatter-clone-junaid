


import React from 'react'
import { Button } from '../ui/button'
import buttonIconOne from '../../../public/topup/button-icon1.svg'
import buttonIconTwo from '../../../public/topup/usage.svg'
import Image from 'next/image'
import Link from 'next/link'

export const NavigationButtons = () => {
  return (
    <div className=' max-w-[1140px] mx-auto mt-6 px-4 sm:px-5 md:px-7 lg:px-7 xl:px-0'>
       {/* Heading */}
       <div className=" text-xl sm:text-xl font-medium">
         <h3>Jump to</h3>
        </div>

        {/* Buttons */}
        <div className=" flex items-center w-full space-x-2 sm:space-x-4 my-6">
            <Button asChild  className=' bg-white w-full h-12 sm:h-[65px] hover:bg-white' >
                <Link href={'/'}>
                <div className=" flex items-center sm:gap-1">
                    <Image
                    src={buttonIconOne}
                    alt='Button-Icon-One'
                    />
                    <p className=' text-black '>Buy new eSIMs</p>
                </div>
                </Link>
            </Button>
            <Button asChild  className=' bg-white w-full h-12 sm:h-[65px] hover:bg-white' >
                <Link href={'/usage'}>
                <div className=" flex items-center sm:gap-1">
                    <Image
                    src={buttonIconTwo}
                    alt='Button-Icon-One'
                    />
                    <p className=' text-black'>Check Usage</p>
                </div>
                </Link>
            </Button>
        </div>
    </div>
  )
}
