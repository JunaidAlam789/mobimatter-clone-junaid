import { MultiSelect } from "@/components/multiSelectSearch";
import Image from "next/image";
import React from "react";
import surfer from "/public/surfer.png";
import { getCountriesData } from "@/utils/getCountriesdata";
import { TopupSelect } from "@/components/TopupSelect";
import { TelecomBrands } from "@/components/TelecomBrands";
import { ToggleButton } from "@/components/ToggleButton";
import { NavigationButtons } from "@/components/TelecomBrands/NavigationButtons";
import { BannerCard } from "@/components/TelecomBrands/BannerCard";
import { getProviderDetails } from "@/actions/getProviderDetails";

const TopupPage = async () => {
  const optionsData: any = await getCountriesData();

  const allProviderDetails = await getProviderDetails();

  // Creating an object to map provider names to logos
  const providerNamesWithLogos : {logo : string; label : string; value: string}[] = [];

  allProviderDetails.forEach((item: any) => {
    const { providerName, providerLogo } = item;

    // Ensure the providerName is not already in the object
    if (!providerNamesWithLogos[providerName]) {
      providerNamesWithLogos[providerName] = { 
        logo : providerLogo, 
        label: providerName,
        value : providerName };
    }
  });

  // Extracting an array of objects with unique provider names and logos
  const uniqueProvidersWithLogos = Object.values(providerNamesWithLogos);

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

          <TopupSelect optionData={optionsData} providers={uniqueProvidersWithLogos} />
        </div>
      </div>

      {/* Telecom Operator */}
      <TelecomBrands providers={uniqueProvidersWithLogos} />

      {/* Button For navigation */}
      <NavigationButtons />

      {/* Promotion image */}
      <BannerCard />
    </div>
  );
};

export default TopupPage;
