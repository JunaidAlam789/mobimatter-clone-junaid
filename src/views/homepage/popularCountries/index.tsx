

import React from 'react'
import USA from '../../../../public/homepage/popularCountries/USA.svg'
import Europe from '../../../../public/homepage/popularCountries/europe.svg'
import Uk from '../../../../public/homepage/popularCountries/UK.svg'
import MiddleEast from '../../../../public/homepage/popularCountries/middleEast.svg'
import Japan from '../../../../public/homepage/popularCountries/japan.svg'
import UAE from '../../../../public/homepage/popularCountries/uae.svg'
import Saudia from '../../../../public/homepage/popularCountries/saudiaArabia.svg'
import Asia from '../../../../public/homepage/popularCountries/Asia.svg'
import Americas from '../../../../public/homepage/popularCountries/Americas.svg'
import Oceania from '../../../../public/homepage/popularCountries/Oceania.svg'
import Africa from '../../../../public/homepage/popularCountries/Africa.svg'
import { CountryItem } from '@/components/CountryItem'

export const PopularCountries = () => {

    const routes = [
        {
            label : "USA",
            icon : USA,
            href : `/travel-esim/USA`
        },
        {
            label : "Europe",
            icon : Europe,
            href : `/travel-esim/Europe`
        },
        {
            label : "UK",
            icon : Uk,
            href : `/travel-esim/UK`
        },
        {
            label : "MiddleEast",
            icon : MiddleEast,
            href : `/travel-esim/Middle East`
        },
        {
            label : "Japan",
            icon : Japan,
            href : `/travel-esim/Japan`
        },
        {
            label : "UAE",
            icon : UAE,
            href : `/travel-esim/UAE`
        },
        {
            label : "KSA",
            icon : Saudia,
            href : `/travel-esim/SaudiArabia`
        },
        {
            label : "Asia",
            icon : Asia,
            href : `/travel-esim/Asia`
        },
        {
            label : "Americas",
            icon : Americas,
            href : `/travel-esim/Americas`
        },
        {
            label : "Oceania",
            icon : Oceania,
            href : `/travel-esim/Oceania`
        },
        {
            label : "Africa",
            icon : Africa,
            href : `/travel-esim/Africa`
        },
    ]
  return (
    <div className="">
    <div className=' lg:space-x-8 xl:space-x-10 lg:w-[700px] xl:w-[1110px] mx-auto flex items-center justify-center mt-7'>
        {routes.map((route) => (
            <CountryItem
            key={route.href}
            label={route.label}
            icon={route.icon}
            href={route.href}
            />
            ))}
    </div>
    </div>
  )
}
