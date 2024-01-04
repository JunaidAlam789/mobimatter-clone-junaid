"use client";
import { ChevronRight, ListFilter } from "lucide-react";
import Link from "next/link";
import EsimCard from "@/components/esimCard";
// import { simData } from "@/views/homepage/esimOffers";
import { IProductsProps } from "@/app/travel-esim/[countryName]/page";
import { SortbyDropdown } from "./sortbyDropdown";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ProductFilters({
  country,
  region,
  data,
  countries,
}: {
  country?: any;
  region?: any;
  data: IProductsProps[];
  countries: any;
}) {
  const [sortedData, setSortedData] = useState(data);
  const [showSidebar, setShowSidebar] = useState(false);

  // Filters state
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [minValidity, setMinValidity] = useState<number | undefined>(undefined);
  const [minDataAllowance, setMinDataAllowance] = useState<number | undefined>(
    undefined
  );

  // trigger apply filters on first button click
  useEffect(() => {
    applyFilters();
  }, [maxPrice, minValidity, minDataAllowance]);

  // console.log("country", country, "region", region);
  const handleSortValue = (value: string) => {
    console.log("value", value);
    // Define a mapping of sorting criteria to corresponding functions
    const sortingCriteria = {
      default: (a: any, b: any) => a.rank - b.rank,
      "lowest price": (a: any, b: any) => a.retailPrice - b.retailPrice,
      "lowest price per gb": (a: any, b: any) =>
        a.retailPrice / a.productDetails.product_data_limit -
        b.retailPrice / b.productDetails.product_data_limit,
      "most data allowance": (a: any, b: any) =>
        b.productDetails.product_data_limit -
        a.productDetails.product_data_limit,
      "longest validity": (a: any, b: any) =>
        b.productDetails.product_validity - a.productDetails.product_validity,
    };
    // Specify the desired sorting criteria
    const sortingCriteriaKey: any = value;

    // Apply sorting using the selected criteria
    // @ts-ignore
    const sortedProducts = [...data].sort(sortingCriteria[sortingCriteriaKey]);
    setSortedData(sortedProducts);
    // console.log("Sorted", sortedProducts);
  };

  const applyFilters = () => {
    let filteredProducts = [...data];

    // Apply filters based on the sidebar input fields
    if (maxPrice !== undefined) {
      // console.log("Maximum price", maxPrice);
      filteredProducts = filteredProducts.filter(
        (product) => product.retailPrice <= maxPrice
      );
    }

    // if (minValidity !== undefined) {
    //   // Calculate validity in days
    //   // const validityInHours: any = data?.productDetails?.product_validity;
    //   // const validityInDays = Math.ceil(validityInHours / 24); // Round up to the nearest day
    //   console.log("User Minimum validity", minValidity);
    //   filteredProducts = filteredProducts.filter((product) => {
    //     const productValidity = Number(product.productDetails.product_validity);
    //     console.log("Product validity", productValidity);
    //     return !isNaN(productValidity) && productValidity >= minValidity;
    //   });
    // }

    if (minValidity !== undefined) {
      // Convert minimum validity from days to hours
      const minValidityInHours = minValidity * 24;

      // console.log("User Minimum validity (days)", minValidity);
      // console.log("User Minimum validity (hours)", minValidityInHours);

      filteredProducts = filteredProducts.filter((product) => {
        const productValidityInHours = Number(
          product.productDetails.product_validity
        );
        // console.log("Product validity (hours)", productValidityInHours);

        return (
          !isNaN(productValidityInHours) &&
          productValidityInHours >= minValidityInHours
        );
      });
    }

    if (minDataAllowance !== undefined) {
      // console.log("Minimum data allowance", minDataAllowance);
      filteredProducts = filteredProducts.filter(
        (product) =>
          Number(product.productDetails.product_data_limit) >= minDataAllowance
      );
    }
    // console.log("FILTERED", filteredProducts);
    setSortedData(filteredProducts);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="max-w-[1330px] mx-auto">
      {/* Navigation Bar */}
      <div className="flex items-center gap-x-3">
        <Link
          href="/"
          className="text-sm text-gray-700 hover:underline hover:underline-offset-2"
        >
          Home
        </Link>
        <ChevronRight size={13} />
        <Link
          href={`/`}
          className="text-sm text-gray-700 hover:underline hover:underline-offset-2"
        >
          New eSIMS
        </Link>

        {region && (
          <>
            <ChevronRight size={13} />
            <Link
              href={`/${region}`}
              className="text-sm text-gray-700 hover:underline hover:underline-offset-2"
            >
              {region}
            </Link>
          </>
        )}

        {country && (
          <>
            <ChevronRight size={13} />
            <Link
              href={`/${country}`}
              className="text-sm text-gray-700 hover:underline hover:underline-offset-2"
            >
              {country}
            </Link>
          </>
        )}
      </div>

      {/* Discover text */}
      {country ? (
        <h2 className="mt-3">
          Discover travel eSIM data packages that work in {country} and beyond!
        </h2>
      ) : (
        <h2 className="mt-2">
          Discover travel eSIM data packages that work in {region} and beyond!
        </h2>
      )}

      <div className="mt-2 flex items-start justify-between">
        {/* Total Products */}
        <p className="text-txtgrey">{data?.length} products</p>
        <div className="flex flex-col items-end gap-y-2">
          {/* Sort By */}
          <div className="flex items-center gap-x-3">
            <p className="text-txtgrey">Sort By</p>
            <SortbyDropdown onSelect={handleSortValue} />
          </div>
          {/* Show Hide Filters Button*/}
          <Button
            className="min-w-full bg-transparent border-2 font-normal hover:bg-transparent focus:ring-0 focus:ring-offset-0"
            variant="outline"
            onClick={toggleSidebar}
          >
            <ListFilter size={15} className="mr-2" />
            {showSidebar ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>
      </div>

      <div className="flex mt-3">
        {/* Sidebar */}
        {showSidebar && (
          <div className="space-y-4 min-w-fit p-1">
            <div>
              <p className="text-sm mb-2">Maximum Price</p>
              <div className="flex">
                <input
                  type="number"
                  value={Number(maxPrice)}
                  className="w-full rounded-l-md focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                  onWheel={(e) => (e.target as HTMLElement).blur()}
                  onChange={(e) => {
                    const value = e.target.value.trim();
                    setMaxPrice(value === "" ? undefined : Number(value));
                    applyFilters();
                  }}
                  autoFocus
                />
                <p className="bg-gray-200 p-2 rounded-r-md min-w-[20%] text-center">
                  USD
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm mb-2">Minimum Validity</p>
              <div className="flex">
                <input
                  type="number"
                  value={Number(minValidity)}
                  className="w-full rounded-l-md focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                  onWheel={(e) => (e.target as HTMLElement).blur()}
                  onChange={(e) => {
                    const value = e.target.value.trim(); // Trim to handle empty string
                    setMinValidity(value === "" ? undefined : Number(value));
                    applyFilters();
                  }}
                />
                <p className="bg-gray-200 p-2 rounded-r-md min-w-[20%] text-center">
                  days
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm mb-2">Minimum Data Allowance</p>
              <div className="flex">
                <input
                  type="number"
                  value={Number(minDataAllowance)}
                  className="w-full rounded-l-md focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                  onWheel={(e) => (e.target as HTMLElement).blur()}
                  onChange={(e) => {
                    const value = e.target.value.trim(); // Trim to handle empty string
                    setMinDataAllowance(
                      value === "" ? undefined : Number(value)
                    );
                    applyFilters();
                  }}
                />
                <p className="bg-gray-200 p-2 rounded-r-md min-w-[20%] text-center">
                  GB
                </p>
              </div>
            </div>
            <Button
              className="bg-[#38BDEF] min-w-full"
              onClick={() => {
                setMaxPrice(undefined);
                setMinValidity(undefined);
                setMinDataAllowance(undefined);
                applyFilters(); // Apply filters after resetting
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Product Grid */}
        <div className="max-w-[1200px] px-5 mx-auto">
          {/* <h1 className=' font-bold'>Country Name : {params.countryName}</h1> */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center mt-4">
            {sortedData.length > 0 ? (
              <>
                {sortedData.map((product: IProductsProps, index: number) => (
                  <EsimCard key={index} data={product} country={countries} />
                ))}
              </>
            ) : (
              <p className=" text-xl">No products found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
