


import { MultiSelect } from '@/components/multiSelectSearch'
import Image from 'next/image'
import React from 'react'
import surfer from '/public/surfer.png'
import { getCountriesData } from '@/utils/getCountriesdata'
import { TopupSelect } from '@/components/TopupSelect'
import { TelecomBrands } from '@/components/TelecomBrands'
import { ToggleButton } from '@/components/ToggleButton'
import { NavigationButtons } from '@/components/TelecomBrands/NavigationButtons'
import { BannerCard } from '@/components/TelecomBrands/BannerCard'


const TopupPage = async () => {
    const optionsData : any = await getCountriesData();

  return (
    <div>
        {/* Top Select Section */}

       <div className="relative w-full h-56">
        <Image src={surfer} alt={"hero_image"} fill className="object-cover" />
        <div className=" absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%]">
          <h2 className="text-white md:text-xl font-semibold mb-3 -ml-[930px] text-center ">
          Shop for eSIM topups
          </h2>
          <ToggleButton />

        <TopupSelect 
         optionData={optionsData}
         />

        </div>
      </div>

      {/* Telecom Operator */}
        <TelecomBrands/>

        {/* Button For navigation */}
        <NavigationButtons />

        {/* Promotion image */}
        <BannerCard />
    </div>
  )
}

export default TopupPage