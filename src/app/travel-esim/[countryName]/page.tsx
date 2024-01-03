

import React from 'react'
import { getSpecificCountryCode } from '@/utils/getCountryCode'
import { getDynamicProducts } from '@/actions/getDynamicProducts';
import EsimCard from '@/components/esimCard';
import { simDataT } from '@/views/homepage/esimOffers';
import { getAllTags, getProductDetails, productDetails } from '@/actions/getProductDetails';
import { getCountriesData } from '@/utils/getCountriesdata';

interface TravelEsimProps {
    params: {
        countryName: string;
    }
}

export interface IProductsProps {
    merchantId : string;
    uniqueId : string;
    productId : string;
    rank : number;
    productCategoryId : number;
    productFamilyId : number;
    productCategory : string;
    providerId : number;
    providerName : string;
    providerLogo : string;
    retailPrice : number;
    wholesalePrice : number;
    currencyCode : string;
    created : string;
    updated : string;
    network : string;
    regions : string[];
    countries : string[];
    productDetails : productDetails;
    product_tags : [];
    product_details  : [];
}


const page = async ({
    params
}:TravelEsimProps) => {
    const countryName = params.countryName.split('-').join(' ');
    // console.log("🚀 ~ file: page.tsx:15 ~ countryName:", countryName)
    
    const getCountryCode = await getSpecificCountryCode(countryName);
    // console.log("🚀 ~ file: page.tsx:22 ~ getCountryCode:", getCountryCode);

    let getSpecificCountryProduct;
    if (!getCountryCode) {
        getSpecificCountryProduct = await getDynamicProducts({
          region: countryName,
        });
      } else {
        getSpecificCountryProduct = await getDynamicProducts({
          country: getCountryCode?.cca2,
        });
      }


    // fetch Product Details
    const fetchProductDetails = getSpecificCountryProduct.map((product : any) => product.productDetails)
    // console.log("🚀 ~ file: page.tsx:40 ~ productDetails:", productDetails)

    // get Dynamic Products Details
    const product_details :any  = getProductDetails(fetchProductDetails);
    // console.log("🚀 ~ file: page.tsx:39 ~ product_details:", product_details)
    // console.log("🚀  product_details:", product_details);
    const allTags = getAllTags(product_details)
    // console.log("🚀 ~ file: page.tsx:42 ~ allTags:", allTags )
    
      const data = getSpecificCountryProduct && product_details 

  const countries = await getCountriesData();
  const countriesData = countries?.map((country : any) => country);
// console.log("FULL DATA ----->", combinedData);

// Merge productDetails into each element of getSpecificCountryProduct
const mergedData = data
  ? getSpecificCountryProduct.map((product: any, index: any) => ({
      ...product,
      productDetails: product_details[index],
      product_tags: product_details[index].product_tags,
      product_details : product_details[index].product_detail,
    }))
  : [];

// console.log("FULL DATA ----->", mergedData);
      
  return (
    <div className='max-w-[1200px] px-5 mt-10 mx-auto'>
        {/* <h1 className=' font-bold'>Country Name : {params.countryName}</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center mt-4">
            {mergedData.length > 0 ? (
                <>
                     {mergedData.map((product : IProductsProps , index : number)  => (
                         <EsimCard key={index} data={product} country={countriesData}  />
                         ))}
                         </>
            ): (
                <p className=' text-xl'>No products found</p>
            )}
           
        </div>
    </div>
  )
}

export default page