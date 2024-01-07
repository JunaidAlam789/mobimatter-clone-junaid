"use client";

import React, { useState } from "react";
import { MultiSelect } from "../multiSelectSearch";
import { CustomDropDown } from "../productFilters/CustomDropDown";
import { dataForTopupPage } from "@/utils/customSelectorData";
import useToggle from "@/utils/toggleButtonState";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { TypedSearch } from "../SearchButton/typedSearch";

interface TopupSelectProps {
  optionData: any;
  providerName : string
  paramCountry : string
}

export const TopupSearchSelect = ({ 
  optionData ,
  providerName,
  paramCountry
}: TopupSelectProps) => {
  console.log("🚀 ~ file: topupSearchSelect.tsx:23 ~ providerName:", providerName)
  const [providername, setProvidername] = useState("");
  // console.log(
  //   "🚀 ~ file: index.tsx:20 ~ TopupSelect ~ providername:",
  //   providername
  // );

  const handleSelectValue = (value: string) => {
    setProvidername(value);
  };
  return (
    <div className=" flex items-center max-w-[1140px] mx-auto gap-x-3">
      <CustomDropDown
        onSelect={handleSelectValue}
        data={dataForTopupPage}
        className=" bg-white text-gray-500 h-[64px] w-96 shadow-md"
        placeholder="Select Provider Name"
        provider={providerName}
        country={paramCountry}
      />
      <MultiSelect
        options={optionData}
        countryData={optionData}
        className=" w-[55dvw] shadow-md"
      />
    </div>
  );
};
