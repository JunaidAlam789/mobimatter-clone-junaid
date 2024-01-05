


import React from 'react'
import Sparks from '../../../public/topup/sparks.svg';
import Three from '../../../public/topup/3.svg';
import Ubigi from '../../../public/topup/ubigi.svg'
import esimgo from '../../../public/topup/esimGo.svg'
import airalo from '../../../public/topup/airalo.svg'
import { CountryItem } from '../CountryItem';

const brands = [
    {
        label : "Sparks",
        icon : Sparks,
        href : `/topup/${"Sparks"}/all`,
    },
    {
        label : "3",
        icon : Three,
        href : `/topup/${"3"}/all`,
    },
    {
        label : "Ubigi",
        icon : Ubigi,
        href : `/topup/${"Ubigi"}/all`,
    },
    {
        label : "eSIMGo",
        icon : esimgo,
        href : `/topup/${"Sparks"}/all`,
    },
    {
        label : "Airalo",
        icon :  airalo,
        href : `/topup/${"Sparks"}/all`,
    },
]
export const TelecomBrands = () => {
  return (
    <div className=' max-w-[1140px] mx-auto mt-6'>
        {/* Heading */}
        <div className=" text-xl font-medium">
         <h3>View top-up offers by telecom operator</h3>
        </div>

        {/* Brands */}
        <div className=" flex items-center space-x-28 w-full mx-auto my-6 ">
            {brands?.map((brand) => (
                <CountryItem
                    key={brand.label}
                    label={brand.label}
                    icon={brand.icon}
                    href={brand.href}
                />
            ))}
        </div>
    </div>
  )
}
