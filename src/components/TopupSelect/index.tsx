"use client";

import React, { useState } from "react";
import { MultiSelect } from "../multiSelectSearch";
import { CustomDropDown } from "../productFilters/CustomDropDown";
import { dataForTopupPage } from "@/utils/customSelectorData";
import useToggle from "@/utils/toggleButtonState";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { TypedSearch } from "../SearchButton/typedSearch";
import { SelectBox } from "./SelectBox";

interface TopupSelectProps {
  optionData: any;
}

export const TopupSelect = ({ optionData }: TopupSelectProps) => {
  const { selectedButton, setSelectedButton } = useToggle();
  const [providername, setProvidername] = useState('');
  console.log("🚀 ~ file: index.tsx:20 ~ TopupSelect ~ providername:", providername)

  const handleSelectValue = ( value : string) => {
    setProvidername(value);
  }
  return (
    <div className=" flex items-center max-w-[1140px] mx-auto gap-x-3">
      {selectedButton === "Country" && (
        <>
          <CustomDropDown
            onSelect={handleSelectValue}
            data={dataForTopupPage}
            className=" bg-white text-gray-500 h-[64px] w-96 shadow-md"
            placeholder="Select Provider Name"
          />
          {/* <MultiSelect
            options={optionData}
            countryData={optionData}
            className=" w-[55dvw] shadow-md"
          /> */}
          <div className=" relative flex items-center w-full">
          <SelectBox 
          countries={optionData}
          className=" w-[55dvw] bg-white text-gray-500 shadow-md" 
          provider={providername}
          />
          <div className=" absolute right-3 bg-[#38BDEF] rounded-full text-white hover:bg-[#38BDEF] hover:opacity-70 transition duration-500 ease-in-out p-2 sm:p-2 md:p-2 lg:p-2 xl:p-2.5 ml-auto">
          <SearchIcon className="h-5 w-5" />
        </div>
          </div>
          
         
        </>
      )}
      {selectedButton === "Order#" && (
        <div className=" relative flex items-center mx-2 w-full">
        <Input
          placeholder="Enter your Order Id ex: MM-123456"
          className="bg-white text-gray-500 h-[64px] w-full shadow-md focus-visible:ring-0 focus-visible:border-none focus-visible:ring-transparent focus-visible:ring-offset-0 border-none"
        />
        <div className=" absolute right-3 bg-[#38BDEF] rounded-full text-white hover:bg-[#38BDEF] hover:opacity-70 transition duration-500 ease-in-out p-2 sm:p-2 md:p-2 lg:p-2 xl:p-2.5 ml-auto">
          <SearchIcon className="h-5 w-5" />
        </div>
      </div>
      )}
    </div>
  );
};
