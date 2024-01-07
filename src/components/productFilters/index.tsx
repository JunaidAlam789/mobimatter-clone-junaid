"use client";
import { ChevronRight, ListFilter } from "lucide-react";
import Link from "next/link";
import EsimCard from "@/components/esimCard";
import { CustomDropDown } from "./CustomDropDown";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { IProductsProps } from "@/app/esim/[search]/page";
import { dataForSearchPage } from "@/utils/customSelectorData";
import Image from "next/image";
import SideBar from "./sideBar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function ProductFilters({
  country,
  region,
  data,
  countries,
  currentPage,
}: {
  country?: any;
  region?: any;
  data?: IProductsProps[];
  countries: any;
  currentPage: string;
}) {
  const searchParams = useSearchParams();
  const [showSidebar, setShowSidebar] = useState(false);
  const [sortedData, setSortedData] = useState(data);
  const [selectedCountryCodes, setSelectedCountryCodes] = useState<string[]>(
    []
  );

  // Filters state
  const [filters, setFilters] = useState({
    maxPrice: undefined,
    minValidity: undefined,
    minDataAllowance: undefined,
  });

  useEffect(() => {
    const countryParams = searchParams.get("selectedCountry");

    if (countryParams) {
      const codes = countryParams.split("%2C");
      setSelectedCountryCodes(codes as string[]);
    }
  }, [searchParams, setSelectedCountryCodes]);

  // Sorting Function
  const handleSortValue = (value: string) => {
    // Apply filters first to get filtered products
    const filteredProducts = applyFilters();
    // Define a mapping of sorting criteria to corresponding functions
    const sortingCriteria: any = {
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
    const sortedProducts = [...filteredProducts].sort(
      sortingCriteria[sortingCriteriaKey]
    );
    setSortedData(sortedProducts);
  };

  const applyFilters = useCallback(() => {
    let filteredProducts = [...data!];

    // Apply filters based on the sidebar input fields
    if (filters.maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          !isNaN(product.retailPrice) &&
          product.retailPrice <= filters.maxPrice!
      );
    }

    if (filters.minValidity !== undefined && filters.minValidity > 0) {
      const minValidityInHours = filters.minValidity * 24;

      filteredProducts = filteredProducts.filter((product) => {
        const productValidityInHours = Number(
          product.productDetails.product_validity
        );
        return (
          !isNaN(productValidityInHours) &&
          productValidityInHours >= minValidityInHours
        );
      });
    }
    if (filters.minDataAllowance !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          !isNaN(Number(product.productDetails.product_data_limit)) &&
          Number(product.productDetails.product_data_limit) >=
            filters.minDataAllowance!
      );
    }
    setSortedData(filteredProducts);
    return filteredProducts;
  }, [data, filters.maxPrice, filters.minValidity, filters.minDataAllowance]);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // trigger applyFilters on first button click
  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  // Reset filters
  const handleFilterChange = (key: string, value: string) => {
    const numericValue = value.trim() === "" ? undefined : Number(value);
    setFilters((prevFilters) => ({ ...prevFilters, [key]: numericValue }));
    applyFilters();
  };

  return (
    <div className="max-w-[1350px] mx-auto px-5">
      {/* Navigation Bar */}
      <div className="flex items-center gap-x-3">
        <Link
          href="/"
          className="text-xs sm:text-sm text-gray-700 hover:underline hover:underline-offset-2"
        >
          Home
        </Link>
        <ChevronRight size={13} />
        <Link
          href={`/`}
          className="text-xs sm:text-sm text-gray-700 hover:underline hover:underline-offset-2"
        >
          {currentPage}
        </Link>

        {region && (
          <>
            <ChevronRight size={13} />
            <Link
              href={`/esim/${region}`}
              className="text-xs sm:text-sm text-gray-700 hover:underline hover:underline-offset-2"
            >
              {region}
            </Link>
          </>
        )}

        {country && (
          <>
            <ChevronRight size={13} />
            <Link
              href={`/esim/${country}`}
              className="text-xs sm:text-sm text-gray-700 hover:underline hover:underline-offset-2"
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

      <div className="mt-2 flex flex-col md:flex-row items-start justify-between">
        {/* Total Products */}
        {data && data.length > 0 ? (
          <p className="text-txtgrey">{data.length} products</p>
        ) : (
          <p className="text-txtgrey">{data?.length} products</p>
        )}
        <div className="flex flex-row md:flex-col items-end gap-y-2 mt-2 md:mt-0 w-full md:w-auto">
          {/* Sort By */}
          <div className="flex items-center gap-x-3">
            <p className="text-txtgrey hidden md:block">Sort By</p>
            <CustomDropDown
              onSelect={handleSortValue}
              data={dataForSearchPage}
              placeholder="Recommended"
            />
          </div>
          {/* Show Hide Filters Button*/}
          <div className="w-full">
            <div className="hidden md:block w-full">
              <Button
                className="w-full bg-transparent border-2 font-normal hover:bg-transparent focus:ring-0 focus:ring-offset-0"
                variant="outline"
                onClick={toggleSidebar}
              >
                <ListFilter size={15} className="mr-2" />
                {showSidebar ? "Hide Filters" : "Show Filters"}
              </Button>
            </div>
            <div className="md:hidden text-right">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    className="bg-transparent border-2 font-normal hover:bg-transparent focus:ring-0 focus:ring-offset-0"
                    variant="outline"
                    onClick={toggleSidebar}
                  >
                    <ListFilter size={15} className="mr-2" />
                    {showSidebar ? "Hide Filters" : "Show Filters"}
                  </Button>
                </SheetTrigger>
                {/* Sidebar, sheet for small screens*/}
                <SheetContent
                  side={"bottom"}
                  className="w-full top-16 md:hidden"
                >
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when youre
                      done.
                    </SheetDescription>
                  </SheetHeader>

                  <SheetFooter>
                    <SheetClose asChild>
                      <Button>Save changes</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-3 gap-x-3">
        {/* Sidebar, hidden for small screens*/}
        {showSidebar && (
          <SideBar
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={() => {
              setFilters({
                maxPrice: undefined,
                minValidity: undefined,
                minDataAllowance: undefined,
              });
              applyFilters(); // Apply filters after resetting
            }}
          />
        )}

        {/* Product Grid */}
        <div className={`${showSidebar ? "w-auto" : "min-w-[90%]"} mx-auto `}>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center mt-4`}
          >
            {(
              (sortedData && sortedData.length > 0 ? sortedData : data) || []
            ).map((product: IProductsProps, index: number) => (
              <EsimCard
                key={index}
                data={product}
                country={countries}
                buttonText="View Offers"
                buttonLink={{
                  pathname: `/esimInfo/${product?.productDetails?.product_Title}`,
                  query: { id: `${product?.productId}` },
                }}
              />
            ))}
            {!(
              (sortedData && sortedData.length > 0) ||
              (data && data.length > 0)
            ) && (
              <div className="flex flex-col items-center col-span-3">
                <div className="flex flex-col items-center">
                  <p className="font-semibold">
                    We currently don&apos;t have any offers for this search
                    criteria..
                  </p>
                  <p>
                    Try searching for another destination or adjusting your
                    filters.
                  </p>
                </div>
                <Image
                  alt=""
                  height={150}
                  width={150}
                  src="/profile/card.svg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
