"use client"


import React, { useCallback } from 'react'

import { Switch } from "@/components/ui/switch"
import useToggle from '@/utils/toggleButtonState'


export const ToggleButton = () => {
    const { selectedButton, setSelectedButton } = useToggle();

    const handleToggleCountry = useCallback(() => {
      setSelectedButton('Country');
    }, [setSelectedButton]);
  
    const handleToggleOrder = useCallback(() => {
      setSelectedButton('Order#');
    }, [setSelectedButton]);
  


  return (

    <div className=' absolute flex justify-end  md:text-xl font-semibold -top-2 right-10'>
        <div className=" flex items-center justify-between rounded-full bg-[#1E2F4F] text-muted-foreground  w-60 text-white text-base">

        <button
          onClick={handleToggleCountry}
          className={`flex-1 py-2 px-4 rounded-full ${
            selectedButton === 'Country' ? 'bg-[#00AEEF] text-white'  : ' text-neutral-300'
          }`}
        >
          Country
        </button>
        <button
          onClick={handleToggleOrder}
          className={`flex-1 py-2 px-4 rounded-full ${
            selectedButton === 'Order#' ? 'bg-[#00AEEF] text-white' : ' text-neutral-300'
          }`}
        >
          Order#
        </button>
        </div>

    </div>
  )
}
