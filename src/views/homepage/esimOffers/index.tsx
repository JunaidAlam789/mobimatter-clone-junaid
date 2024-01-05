import EsimCard from "@/components/esimCard";
import { getDynamicProducts } from "@/actions/getDynamicProducts";
import { getAllTags, getProductDetails } from "@/actions/getProductDetails";
import { getCountriesData } from "@/utils/getCountriesdata";
import { getSpecificCountryCode } from "@/utils/getCountryCode";

// import three from "/public/homepage/esimCard/3.png";
// import bouygues from "/public/homepage/esimCard/bouygues.png";
// import sparks from "/public/homepage/esimCard/sparks.png";
// import { StaticImageData } from "next/image";
// import usa from "/public/navbar/usa.svg";
// import uae from "/public/navbar/uae.svg";
// import europe from "/public/navbar/europe.svg";

// export interface simDataT {
//   logo: StaticImageData;
//   package: string;
//   company: string;
//   validity: string;
//   data: string;
//   price: string;
//   tag?: string;
//   network?: string;
//   countries?: string[];
//   activeCountries: number;
// }

// export const simData = [
//   {
//     logo: three,
//     package: "Global 13 GB",
//     company: "3",
//     validity: "365 days",
//     data: "13 GB",
//     price: "39.99",
//     tag: "Best Coverage",
//     network: "5G",
//     countries: [usa, uae, europe],
//     activeCountries: 70,
//   },
//   {
//     logo: bouygues,
//     package: "EU 30 GB Unlimited Calls",
//     company: "Bouygues",
//     validity: "30 days",
//     data: "30 GB",
//     price: "40.99",
//     tag: "",
//     network: "",
//     countries: [usa, uae, europe],
//     activeCountries: 102,
//   },
//   {
//     logo: sparks,
//     package: "Europe and USA Yearly 30 GB",
//     company: "Sparks",
//     validity: "365 days",
//     data: "30 GB",
//     price: "39.99",
//     tag: "Winter Special",
//     network: "5G",
//     countries: [usa, uae, europe],
//     activeCountries: 98,
//   },
//   {
//     logo: three,
//     package: "Singapore Malaysia and Thailand 30 GB",
//     company: "3",
//     validity: "365 days",
//     data: "20 GB",
//     price: "49.99",
//     tag: "",
//     network: "5G",
//     countries: [usa, uae, europe],
//     activeCountries: 90,
//   },
//   {
//     logo: bouygues,
//     package: "Europe and USA Yearly 30 GB",
//     company: "Bouygues",
//     validity: "30 days",
//     data: "25 GB",
//     price: "42.99",
//     tag: "Best Quality",
//     network: "",
//     countries: [usa, uae, europe],
//     activeCountries: 110,
//   },
//   {
//     logo: sparks,
//     package: "Japan 10 GB",
//     company: "Sparks",
//     validity: "30 days",
//     data: "40 GB",
//     price: "49.99",
//     tag: "",
//     network: "5G",
//     countries: [usa, uae, europe],
//     activeCountries: 120,
//   },
//   {
//     logo: three,
//     package: "Discover Global 20 GB",
//     company: "3",
//     validity: "30 days",
//     data: "25 GB",
//     price: "45.99",
//     tag: "Winter Special",
//     network: "5G",
//     countries: [usa, uae, europe],
//     activeCountries: 95,
//   },
//   {
//     logo: bouygues,
//     package: "EU 30 GB Unlimited Calls",
//     company: "Bouygues",
//     validity: "365 days",
//     data: "20 GB",
//     price: "39.99",
//     tag: "",
//     network: "",
//     countries: [usa, uae, europe],
//     activeCountries: 80,
//   },
//   {
//     logo: sparks,
//     package: "Asia 10 Countries 20 GB",
//     company: "Sparks",
//     validity: "30 days",
//     data: "15 GB",
//     price: "34.99",
//     tag: "Best Coverage",
//     network: "4G",
//     countries: [usa, uae, europe],
//     activeCountries: 75,
//   },
// ];

export default async function EsimOffers() {
  const country = "France";
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
    });
  }

  // fetch Product Details
  const fetchProductDetails = getSpecificCountryProduct.map(
    (product: any) => product.productDetails
  );
  // console.log("🚀 ~ file: page.tsx:40 ~ productDetails:", productDetails)

  // get Dynamic Products Details
  const product_details: any = getProductDetails(fetchProductDetails);
  // console.log("🚀 ~ file: page.tsx:39 ~ product_details:", product_details)
  // console.log("🚀  product_details:", product_details);
  // const allTags = getAllTags(product_details);
  // console.log("🚀 ~ file: page.tsx:42 ~ allTags:", allTags )

  const data = getSpecificCountryProduct && product_details;

  const countries = await getCountriesData();
  // const countriesData = countries?.map((country: any) => country);
  // console.log("FULL DATA ----->", combinedData);

  // Merge productDetails into each element of getSpecificCountryProduct
  const mergedData = data
    ? getSpecificCountryProduct
        .slice(0, 9) // Add this line to extract the first nine elements
        .map((product: any, index: any) => ({
          ...product,
          productDetails: product_details[index],
          product_tags: product_details[index].product_tags,
          product_details: product_details[index].product_detail,
        }))
    : [];

  return (
    <div className="max-w-[1200px] px-5 mt-10 mx-auto">
      <h2 className="text-#1A202C text-lg font-medium">Popular eSIM offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center mt-4">
        {mergedData.map((item: any, index: number) => (
          <EsimCard
            key={index}
            data={item}
            country={countries}
            buttonText="View Offer"
            buttonLink={{
              pathname: `${item?.productDetails?.product_Title}`,
              query: { id: `${item?.productId}` },
            }}
          />
        ))}
      </div>
    </div>
  );
}
