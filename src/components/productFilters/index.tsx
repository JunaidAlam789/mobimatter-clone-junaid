import { ChevronRight } from "lucide-react";
import Link from "next/link";
import EsimCard from "../esimCard";
import { simData } from "@/views/homepage/esimOffers";
import { IProductsProps } from "@/app/travel-esim/[countryName]/page";

export default async function ProductFilters({
  country,
  region,
  data,
  countries,
}: {
  country?: any;
  region?: any;
  data : IProductsProps[];
  countries : any
}) {
  // console.log("country", country, "region", region);
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

      {/* Total Products */}
      <div className="mt-2 flex items-center justify-between">
        <p className="text-txtgrey">{data?.length} products</p>
        <p className="text-txtgrey">Sort By</p>
      </div>

      {/* Cards */}
      {/* <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center mt-4">
        {simData.map((item, index) => (
          <EsimCard key={index} data={item} />
        ))}
      </div> */}
      
      {/* Product Grid */}
      <div className='max-w-[1200px] px-5 mt-10 mx-auto'>
        {/* <h1 className=' font-bold'>Country Name : {params.countryName}</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center mt-4">
            {data.length > 0 ? (
                <>
                     {data.map((product : IProductsProps , index : number)  => (
                         <EsimCard key={index} data={product} country={countries}  />
                         ))}
                         </>
            ): (
                <p className=' text-xl'>No products found</p>
            )}
           
        </div>
    </div>
    </div>
  );
}
