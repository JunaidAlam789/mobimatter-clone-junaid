import { getDynamicProducts } from "@/actions/getDynamicProducts";
import { getProductDetails } from "@/actions/getProductDetails";
import EsimCard from "@/components/esimCard";
import { Separator } from "@/components/ui/separator";
import { getCountriesData } from "@/utils/getCountriesdata";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import Image from "next/image";

export default async function EsimDetailsEsim({
  params,
  searchParams,
}: {
  params: { esimDetails: string };
  searchParams: { id: string };
}) {
  const countries = await getCountriesData();
  const productId = searchParams.id;
  const data = await getDynamicProducts({ productId });
  const productDetails = data.map((product: any) => product.productDetails);
  const formattedData: any = getProductDetails(productDetails);
  const mergedData = data.map((product: any, index: any) => ({
    ...product,
    productDetails: formattedData[index],
    product_tags: formattedData[index].product_tags,
    product_details: formattedData[index].product_detail,
  }));
  // console.log("product details", formattedData[0]);

  const countryFlagsAndNames = data[0].countries.map((countryCode: string) => {
    const country = countries.find((c: any) => c.cca2 === countryCode);
    if (country) {
      return {
        code: countryCode,
        name: country.name,
        flag: country.flag,
      };
    } else {
      return {
        code: countryCode,
        name: "Unknown",
        flag: "N/A",
      };
    }
  });

  // console.log("flag", countryFlagsAndNames);
  return (
    <div className="max-w-[1300px] mx-auto">
      {/* Esim Card */}
      <div className="flex flex-col items-center justify-center max-w-[70%] mx-auto mt-3">
        <h3 className="text-sm font-medium mb-3">
          {formattedData[0].product_Title}
        </h3>
        <EsimCard
          data={mergedData[0]}
          country={countries}
          buttonText="Buy Now"
          buttonLink={"/checkout"}
        />
      </div>

      <div className="flex gap-x-5 mt-5">
        {/* Esim Details */}
        <div className="min-w-[60%]">
          <p className="mb-3">Details</p>
          <div className="bg-white p-2 rounded-md space-y-3">
            {/* Title */}
            <p className="font-medium uppercase text-lg">
              {formattedData[0].product_detail.heading}
            </p>
            {/* Description */}
            <p className="text-sm">
              {formattedData[0].product_detail.description}
            </p>
            <Separator className="bg-gray-100" />
            {/* Multiline Details */}
            {formattedData[0].product_detail.items.map(
              (item: any, index: number) => (
                <div key={index} className="">
                  <p className="text-[15px] leading-6 my-3">{item}</p>
                  {index !==
                    formattedData[0].product_detail.items.length - 1 && (
                    <Separator className="bg-gray-100" />
                  )}
                </div>
              )
            )}
          </div>
        </div>

        {/* FAQ */}
        <div className="min-w-[40%]">
          <p className="mb-3">FAQ</p>
          <div className="bg-white rounded-md p-2">
            {/* First Accordion */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm hover:no-underline">
                  Does my phone support eSIM technology?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    The sure way you can verify if your phone is compatible:
                  </p>
                  <p className="leading-6">
                    <span className="font-[450]">iPhone:</span> Go Settings
                    -&gt; Cellular (or Mobile Data). If you see &apos;Add
                    Cellular Plan&apos; or &apos;Add Mobile Plan&apos;, the
                    phone supports eSIM
                  </p>
                  <p className="leading-6">
                    <span className="font-[480]">Samsung:</span> Go Settings
                    -&gt; Go Settings -&gt; Connections -&gt; SIM Card Manager.
                    If you see &apos;Add Mobile Plan&apos;, the phone supports
                    eSIM
                  </p>
                  <p className="leading-6">
                    <span className="font-[480]">Google Pixel:</span> Go
                    Settings -&gt; Networks & Internet -&gt; SIMs -&gt;
                    &apos;+Add more&apos;. If you are using Pixel 4/4a or a
                    later model, it will be there.
                  </p>
                  <h3 className="font-[480] mt-4">IMPORTANT!</h3>
                  <p className="leading-6">
                    Some models have exceptions depending on models and markets.
                    Operator locked devices: If your device is locked to a
                    specific carrier due to a contract, it needs to be unlocked
                    first to be able to use the eSIMs sold on our platform.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Second Accordion */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm hover:no-underline">
                  Can I use my physical SIM along with the eSIM?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="leading-6">
                    Yes! With dual-SIM functionality you can have both your
                    physical SIM and eSIM active at the same time.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Third Accordion */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm hover:no-underline">
                  I already have an active eSIM in my phone, can I use your
                  service?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="leading-6">
                    Yes, your phone can store many eSIM profiles at once. You
                    can choose which one to use at in your phone settings.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Fourth Accordion */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm hover:no-underline">
                  Can I use Mobile Hotspot or Tethering with my eSIM?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="leading-6">
                    Yes! Mobile hotspot featured is enabled in all of our
                    products, except if explicitly mentioned in the product
                    details.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Reward */}
          <div className="bg-blue-950 p-3 rounded-md flex gap-x-2 my-4">
            <Image src={"/logo.png"} alt="logo" width={80} height={80} />
            <p className="text-white font-[450]">
              Earn $0.60 MobiMatter Rewards with this purchase
            </p>
          </div>

          {/* Suggested Products Carousel */}
          <div>Carousel?</div>
        </div>
      </div>

      {/* Works in countries */}
      <p className="mt-7">Works in</p>
      <div className="p-2 bg-white my-4 rounded-md grid grid-cols-5">
        {countryFlagsAndNames.map((item: any) => (
          <div key={item.code} className="flex gap-x-1 mb-1 items-center">
            <Image
              src={item.flag}
              alt={item.name}
              width={20}
              height={10}
              className="w-4 h-3 rounded-[2px]"
            />
            <p className="text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
