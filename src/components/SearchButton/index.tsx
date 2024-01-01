
import React from 'react'
import { Input } from '../ui/input'
import { SearchIcon } from 'lucide-react'
import { Button } from '../ui/button'

export const SearchButton = () => {
  return (
    <>
    <div className=" bg-[#FFFFFF] rounded-full p-1 sm:p-2 md:p-2 lg:p-2 xl:p-3 border border-neutral-200 w-auto sm:max-w-[470px] md:w-[350px] lg:w-[350px] xl:w-[460px] flex items-center justify-center shadow-inner mt-4 mb-6 sm:mt-6 sm:mb-6  md:mt-6 md:mb-9 lg:mt-10 lg:mb-4 xl:mt-16 xl:mb-5 ">
        <Input
        type="text"
        placeholder='Search for a destination...'
        className=' focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 border-none focus-visible:border-none
        '
        />
        <Button
        className=' bg-[#38BDEF] rounded-full text-white  hover:bg-[#38BDEF] hover:opacity-70 transition duration-500 ease-in-out p-2 sm:p-2 md:p-2 lg:p-2  xl:p-2.5'
        >
        <SearchIcon
         className=' h-5 w-5' />
        </Button>
    </div>
    </>
  )
}
