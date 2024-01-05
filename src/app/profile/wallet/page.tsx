import React from 'react'
import { Info,DollarSign } from 'lucide-react';
import Image from 'next/image'
import WalletPageComponent from '@/components/profilePageComponents/WalletPageComponent'

const page = () => {
  return (
    <div className='w-screen min-h-screen px-[22rem]'>
      <p className='pt-10 text-lg'>MobiMatter Rewards</p>
      <div className='w-full h-[12rem] bg-darkblue rounded-sm dropshadow-md p-[1rem] text-white flex flex-col justify-between'>
        <div className='flex flex-col justiy-end space-y-4'>
          <p>MobiPay balance</p>
          <div className='flex items-center'>
            <DollarSign size='60'/>
            <p className='text-[4rem]'>0.00</p>
          </div>
        </div>
        <div className='flex items-center text-sm'>
          <Info size='16'/>
          <p className='pl-1'>Get 10% cashback with every purchase!</p>
        </div>
      </div>
      <WalletPageComponent/>
    </div>
  )
}

export default page