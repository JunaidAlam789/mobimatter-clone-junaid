import { ChevronRight } from "lucide-react";
import Link from "next/link";
import EsimCard from "../esimCard";
import { simData } from "@/views/homepage/esimOffers";

export default async function ProductFilters({
  country,
  region,
}: {
  country?: any;
  region?: any;
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
        <p className="text-txtgrey">28 products</p>
        <p className="text-txtgrey">Sort By</p>
      </div>

      {/* Cards */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center mt-4">
        {simData.map((item, index) => (
          <EsimCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
