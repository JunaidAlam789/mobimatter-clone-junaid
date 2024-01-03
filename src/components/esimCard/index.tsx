import Image from "next/image";
import { simDataT } from "@/views/homepage/esimOffers";
import fiveG from "/public/homepage/esimCard/fiveg.svg";
import globe from "/public/homepage/esimCard/globe.svg";
import snow from "/public/homepage/esimCard/snow.svg";
import badge from "/public/homepage/esimCard/badge.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { productDetails } from "@/actions/getProductDetails";
import React from "react";
import { IProductsProps } from "@/app/travel-esim/[countryName]/page";

export default function EsimCard({ data , country }: { data ?: IProductsProps;  country ?: any }) {


   // get Three Countries for displaying flags
   const threeCountries = data?.countries.map((item: any) => ({
    cca: item,
  })).slice(0, 3);

// Find matching countries in the 'country' array
const threeCountriesFlag = threeCountries?.map((threeCountry : any) => {
  const matchingCountry = country?.find((countryItem: any) => countryItem.cca2 === threeCountry.cca);
  return matchingCountry ? { ...matchingCountry } : null;
}).filter(Boolean);



  // Calculate validity in days
const validityInHours : any = data?.productDetails?.product_validity;
const validityInDays = Math.ceil(validityInHours / 24); // Round up to the nearest day

// product Tags
const tags  = data?.productDetails?.product_tags.map((item : any) => ({tag : item.item}))


  return (
    <div className="bg-white w-full xl:h-[186px] rounded-md shadow-sm p-3">
      {/* Logo - Package - tag */}
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-x-2">
          {/* Logo */}
          <Image
            src={data?.providerLogo!}
            alt="logo"
            width={23}
            height={23}
            className="mt-2"
          />
          {/* Package and Company */}
          <div>
            <p className="text-[#1A202C] text-sm font-medium">{data?.productDetails?.product_Title}</p>
            <p className="text-[#8A8D92] text-[10px]">{''}</p>
          </div>
        </div>
        {/* Tag */}
        <div className="flex flex-col items-end">
          {tags?.map((item : any, index : any) => (
            <div key={index} className="">
                  {item.tag === "BEST COVERAGE" || item.tag === "BEST QUALITY" ? (
            <span className="uppercase text-[10px] text-[#8A8D92] flex items-center">
              <Image
                src={badge}
                alt="best"
                width={10}
                height={10}
                className="mr-1"
              />
              {item.tag}
            </span>
          ) : item.tag === "❄️Winter Special" || item.tag === "24 HR PASS" ? (
            <span className="uppercase text-[10px] text-[#8A8D92] flex items-center">
              <Image
                src={snow}
                alt="best"
                width={10}
                height={10}
                className="mr-1"
              />
              {item.tag}
            </span>
          ) : (
            <span> </span>
          )}
            </div>
          ))}
          {/* {data.tag === "BEST COVERAGE" || data.tag === "BEST QUALITY" ? (
            <span className="uppercase text-[10px] text-[#8A8D92] flex items-center">
              <Image
                src={badge}
                alt="best"
                width={10}
                height={10}
                className="mr-1"
              />
              {data.tag}
            </span>
          ) : data.tag === "❄️Winter Special" ? (
            <span className="uppercase text-[10px] text-[#8A8D92] flex items-center">
              <Image
                src={snow}
                alt="best"
                width={10}
                height={10}
                className="mr-1"
              />
              {data.tag}
            </span>
          ) : (
            <span> </span>
          )} */}
          {/* Network */}
          {data?.network! === "5G" ? (
            <Image src={fiveG} alt="5G" width={22} height={22} />
          ) : null}
        </div>
      </div>

      {/* Validity - Data - Price */}
      <div className="flex justify-between items-center mt-3">
        {/* Validity */}
        <div>
          <p className="text-[#1A202C] text-xs">Validity:</p>
          <p className="text-[15px] font-medium text-[#38BDEF]">
            {validityInDays} days
          </p>
        </div>
        {/* Data */}
        <div>
          <p className="text-[#1A202C] text-xs">Data:</p>
          <p className="text-[15px] font-medium text-[#38BDEF]">{data?.productDetails?.product_data_unit}</p>
        </div>
        {/* Price */}
        <div>
          <p className="text-[#1A202C] text-xs">Price:</p>
          <p className="text-[15px] font-medium text-[#24B502]">{data?.retailPrice}</p>
        </div>
      </div>

      {/* Works in countries */}
      <div className="flex items-end mt-3 gap-x-2">
        <Image src={globe} alt="logo" width={18} height={18} />
        <p className="text-xs font-medium">
          Works in{" "}
          <span className="space-x-0.5">
            {threeCountriesFlag?.map((item : any) => (
              <Image
                src={item.flag}
                width={15}
                height={15}
                alt="flag"
                key={item.name}
                className="inline rounded-md"
              />
            ))}{" "}
            and {data?.countries?.length} more destinations
          </span>
        </p>
      </div>

      {/* View Offer Button */}
      {/* Button */}
      <Link href="/" className="mt-3 block">
        <Button className="bg-[#38BDEF] min-w-full" size="sm">
          View Offer
        </Button>
      </Link>
    </div>
  );
}
