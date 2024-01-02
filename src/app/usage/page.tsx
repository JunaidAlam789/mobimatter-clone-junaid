import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-[70vh] min-w-screen mx-[7rem] px-[1.5rem] flex flex-col items-center pt-10 space-y-4'>
      <div className='w-full'>
        <h2 className='text-[1.8rem] font-bold'>eSIM Status and Usage Check</h2>
        <p>You can see your data usage directly from your phone settings.</p>
      </div>
      <div className='w-full'>
        <p>Alternatively, enter your order number:</p>
        <div className='flex w-full space-x-2 space-y-2'>
          <input className='w-full rounded-md border-2 border-btnblue outline-none px-6 focus:shadow-sm focus:shadow-btnblue' placeholder='MM-12345'/>
          <Button className='bg-btnblue hover:bg-hoverbtnblue' size='lg'>
            Check
          </Button>
        </div>
        <p>No data found for this order</p>
      </div>
      
    </div>
  )
}

export default page