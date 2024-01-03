import Image from "next/image";
import surfer from "/public/surfer.png";
import { getCountriesData } from "@/utils/getCountriesdata";
import { MultiSelect } from "@/components/multiSelectSearch";
import ProductFilters from "@/components/productFilters";

export default async function Search({ params }: { params: { search: any } }) {
  const data: any = await getCountriesData();
  const country = params.search.replace(/%20/g, " ");
  const paramCountry: string[] = [];
  paramCountry.push(country);

  // Check if the country is actually a region
  const isRegion = checkIfRegion(country, data);
  const region = isRegion ? country : getRegionName(country, data);
  // console.log("isRegion", isRegion, "region", region);
  return (
    <div>
      <div className="relative w-full h-56">
        <Image src={surfer} alt={"hero_image"} fill className="object-cover" />
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%]">
          <h2 className="text-white md:text-xl font-semibold mb-8 text-center">
            Buy Prepaid eSIM Andorra from $1.4 per GB when you visit Andorra
          </h2>

          <MultiSelect options={data} params={paramCountry} />
        </div>
      </div>

      {/* Use a conditional rendering to render ProductFilters based on whether region is true or false */}
      {isRegion ? (
        <ProductFilters region={region} />
      ) : (
        <ProductFilters country={country} region={region} />
      )}
    </div>
  );
}

// Function to check if the country is actually a region
function checkIfRegion(country: string, countriesData: any[]): boolean {
  // Search in the array of all countries to determine if it's a valid country name
  const validCountry = countriesData.find(
    (data) => data.name.toLowerCase() === country.toLowerCase()
  );

  // If it's not a valid country, it might be a region
  return !validCountry;
}

// Function to get the region name based on the country
function getRegionName(country: string, countriesData: any[]): string {
  const countryData = countriesData.find(
    (data) => data.name.toLowerCase() === country.toLowerCase()
  );
  // console.log("countryData", countryData);
  return countryData ? countryData.region : "";
}
