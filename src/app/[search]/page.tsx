import Image from "next/image";
import surfer from "/public/surfer.png";
import { getCountriesData } from "@/utils/getCountriesdata";
import { MultiSelect } from "@/components/multiSelectSearch";
import ProductFilters from "@/components/productFilters";
import { getAllTags, getProductDetails } from "@/actions/getProductDetails";
import { getDynamicProducts } from "@/actions/getDynamicProducts";
import { getSpecificCountryCode } from "@/utils/getCountryCode";
import { IProductsProps } from "../travel-esim/[countryName]/page";
import EsimCard from "@/components/esimCard";

export default async function Search({ params }: { params: { search: any } }) {
  const data1: any = await getCountriesData();
  const country = params.search.replace(/%20/g, " ");
  const paramCountry: string[] = [];
  paramCountry.push(country);
 
  // Check if the country is actually a region
  const isRegion = checkIfRegion(country, data1);
  const region = isRegion ? country : getRegionName(country, data1);
  // console.log("isRegion", isRegion, "region", region);




  // new Code

  // const countryName = params.search.split('-').join(' ');
  // console.log("🚀 ~ file: page.tsx:15 ~ countryName:", countryName)
  
  const getCountryCode = await getSpecificCountryCode(country);
  // console.log("🚀 ~ file: page.tsx:22 ~ getCountryCode:", getCountryCode);

  let getSpecificCountryProduct;
  if (!getCountryCode) {
      getSpecificCountryProduct = await getDynamicProducts({
        region: country,
      });
    } else {
      getSpecificCountryProduct = await getDynamicProducts({
        country: getCountryCode?.cca2,
        category : "esim_realtime",
      });
    }


  // fetch Product Details
  const fetchProductDetails = getSpecificCountryProduct?.map((product : any) => product.productDetails)
  // console.log("🚀 ~ file: page.tsx:40 ~ productDetails:", productDetails)

  // get Dynamic Products Details
  const product_details :any  = getProductDetails(fetchProductDetails);
  // console.log("🚀 ~ file: page.tsx:39 ~ product_details:", product_details)
  // console.log("🚀  product_details:", product_details);
  // const allTags = getAllTags(product_details)
  // console.log("🚀 ~ file: page.tsx:42 ~ allTags:", allTags )
  
    const data = getSpecificCountryProduct && product_details 

const countries = await getCountriesData();
const countriesData = countries?.map((country : any) => country);
// console.log("FULL DATA ----->", combinedData);

// Merge productDetails into each element of getSpecificCountryProduct
const mergedData : IProductsProps[] = data
? getSpecificCountryProduct.map((product: any, index: any) => ({
    ...product,
    productDetails: product_details[index],
    product_tags: product_details[index].product_tags,
    product_details : product_details[index].product_detail,
  }))
: [];

const esim_realtimeProducts  = mergedData.filter((item ) => item.productCategory === "esim_realtime")
console.log("esim_realtimeProducts ----->", esim_realtimeProducts);
// console.log("Merged Data ----->", mergedData);


  return (
    <div>
      <div className="relative w-full h-56">
        <Image src={surfer} alt={"hero_image"} fill className="object-cover" />
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%]">
          <h2 className="text-white md:text-xl font-semibold mb-8 text-center">
            Buy Prepaid eSIM Andorra from $1.4 per GB when you visit Andorra
          </h2>

          <MultiSelect options={data1} params={paramCountry} region={region} country={country} countryData={data1} />
        </div>
      </div>
      
      {/* Use a conditional rendering to render ProductFilters based on whether region is true or false */}
      {isRegion ? (
        <ProductFilters region={region} data={esim_realtimeProducts} countries={countriesData} />
      ) : (
        <ProductFilters country={country} region={region} data={esim_realtimeProducts} countries={countriesData} />
      )}
    </div>
  );
}

// Function to check if the country is actually a region
function checkIfRegion(country: string, countriesData: any[]): boolean {
  // Search in the array of all countries to determine if it's a valid country name
  const validCountry = countriesData?.find(
    (data) => data.name.toLowerCase() === country.toLowerCase()
  );

  // If it's not a valid country, it might be a region
  return !validCountry;
}

// Function to get the region name based on the country
function getRegionName(country: string, countriesData: any[]): string {
  const countryData = countriesData?.find(
    (data) => data.name.toLowerCase() === country.toLowerCase()
  );
  // console.log("countryData", countryData);
  return countryData ? countryData.region : "";
}
