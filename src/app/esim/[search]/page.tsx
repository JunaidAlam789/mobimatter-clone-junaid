import Image from "next/image";
import surfer from "/public/surfer.png";
import { getCountriesData } from "@/utils/getCountriesdata";
import { MultiSelect } from "@/components/multiSelectSearch";
import ProductFilters from "@/components/productFilters";
import {
  getAllTags,
  getProductDetails,
  productDetails,
} from "@/actions/getProductDetails";
import { getDynamicProducts } from "@/actions/getDynamicProducts";
import { getSpecificCountryCode } from "@/utils/getCountryCode";
import EsimCard from "@/components/esimCard";
import { checkIfRegion, getRegionName } from "@/utils/RegionFunctionality";

export interface IProductsProps {
  merchantId: string;
  uniqueId: string;
  productId: string;
  rank: number;
  productCategoryId: number;
  productFamilyId: number;
  productCategory: string;
  providerId: number;
  providerName: string;
  providerLogo: string;
  retailPrice: number;
  wholesalePrice: number;
  currencyCode: string;
  created: string;
  updated: string;
  network: string;
  regions: string[];
  countries: string[];
  productDetails: productDetails;
  product_tags: [];
  product_details: [];
}

export default async function Search({ params }: { params: { search: any } }) {
  const countries = await getCountriesData();
  const countriesData = countries?.map((country: any) => country);

  const country = params.search.replace(/%20/g, " ");
  const paramCountry: string[] = [];
  paramCountry.push(country);

  // Check if the country is actually a region
  const isRegion = checkIfRegion(country, countries);
  const region = isRegion ? country : getRegionName(country, countries);

  return (
    <div>
      <div className="relative w-full h-56">
        <Image src={surfer} alt={"hero_image"} fill className="object-cover" />
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%]">
          <h2 className="text-white md:text-xl font-semibold mb-8 text-center">
            Buy Prepaid eSIM Andorra from $1.4 per GB when you visit Andorra
          </h2>

          <MultiSelect
            options={countries}
            params={paramCountry}
            region={region}
            country={country}
            countryData={countries}
          />
        </div>
      </div>

      {/* Use a conditional rendering to render ProductFilters based on whether region is true or false */}
      {isRegion ? (
        <ProductFilters
          region={region}
          // data={esim_realtimeProducts}
          countries={countriesData}
          currentPage={"New eSIMS"}
        />
      ) : (
        <ProductFilters
          country={country}
          region={region}
          // data={esim_realtimeProducts}
          countries={countriesData}
          currentPage={"New eSIMS"}
        />
      )}
    </div>
  );
}
