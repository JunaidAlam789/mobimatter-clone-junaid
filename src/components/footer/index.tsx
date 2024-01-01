import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/logo";
import { Instagram } from "lucide-react";
import linkedin from "/public/footer/linkedin.svg";
import facebook from "/public/footer/facebook.svg";
const column1 = [
  {
    text: "Buy new eSIM",
    href: "/",
  },
  {
    text: "Our Blog",
    href: "/blog",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Help & Support",
    href: "/help",
  },
  {
    text: "Terms & conditions",
    href: "/terms",
  },
  {
    text: "Privacy Policy",
    href: "/policy",
  },
  {
    text: "Delivery, refunds policy",
    href: "/delivery",
  },
  {
    text: "Sitemap",
    href: "/sitemap",
  },
  {
    text: "Affiliate",
    href: "/affiliate",
  },
  {
    text: "Destinations",
    href: "/destinations",
  },
];

const column2_regions = [
  {
    text: "eSIM for Europe",
    href: "/travel-esim/europe",
  },
  {
    text: "eSIM for Asia",
    href: "/travel-esim/asia",
  },
  {
    text: "eSIM for Americas",
    href: "/travel-esim/america",
  },
  {
    text: "eSIM for Middle East",
    href: "/travel-esim/middle-east",
  },
  {
    text: "eSIM for Oceania",
    href: "/travel-esim/oceania",
  },
  {
    text: "eSIM for Africa",
    href: "/travel-esim/africa",
  },
];

const column3_countries = [
  {
    text: "eSIM for USA",
    href: "/travel-esim/usa",
  },
  {
    text: "eSIM for Japan",
    href: "/travel-esim/japan",
  },
  {
    text: "eSIM for Canada",
    href: "/travel-esim/canada",
  },
  {
    text: "eSIM for Spain",
    href: "/travel-esim/spain",
  },
  {
    text: "eSIM for Italy",
    href: "/travel-esim/italy",
  },
  {
    text: "eSIM for United Kingdom",
    href: "/travel-esim/uk",
  },
  {
    text: "eSIM for Dubai",
    href: "/travel-esim/dubai",
  },
  {
    text: "eSIM for Singapore",
    href: "/travel-esim/singapore",
  },
  {
    text: "eSIM for Turkey",
    href: "/travel-esim/turkey",
  },
];

export default function Footer() {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 xl:px-10 pt-8 border-t mt-56  border-[#E2E8F0]">
      <div className="flex gap-y-16 flex-col lg:flex-row">
        {/* Left Side */}
        <div className="w-full md:w-[60%] lg:w-[40%] space-y-10">
          <Logo />
          <p className="text-[#8A8D92] text-sm">
            eSimPro is a digital channel for telecom services, enabling
            consumers to find and buy the best mobile offers through their
            favorite e-commerce platforms
          </p>
          <p className="text-[#8A8D92] text-sm">
            14th floor, Al Sarab Tower, Abu Dhabi Global Market Square, Al
            Maryah Island, Abu Dhabi, United Arab Emirates
          </p>
        </div>

        {/* Right Side Columns */}
        <div className="w-full lg:w-[60%] flex justify-between lg:justify-around flex-wrap md:flex-nowrap gap-4 gap-y-10 sm:gap-y-0 md:gap-0">
          <div className="flex flex-col gap-y-4">
            <h2 className="font-medium text-sm text-[#1A202C]">Quick Links</h2>
            {column1.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className="font-medium text-sm text-[#718096] w-fit hover:text-slate-600 duration-300 transition-colors ease-in-out"
              >
                {item.text}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-y-4">
            <h2 className="font-medium text-sm text-[#1A202C]">Regions</h2>
            {column2_regions.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className="font-medium text-sm text-[#718096] w-fit hover:text-slate-600 duration-300 transition-colors ease-in-out"
              >
                {item.text}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-y-4">
            <h2 className="font-medium text-sm text-[#1A202C]">Countries</h2>
            {column3_countries.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className="font-medium text-sm text-[#718096] w-fit hover:text-slate-600 duration-300 transition-colors ease-in-out"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="flex items-center justify-between py-6 w-full border-t border-[#E2E8F0] mt-5">
        <p className="text-[#1A202C] text-sm">© 2023 eSimPro LTD</p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <Link href="www.linkedin.com">
            <Image src={linkedin} alt="linkedin" width={26} height={26} />
          </Link>
          <Link href={"www.instagram.com"}>
            <Instagram size={20} />
          </Link>
          <Link href={"www.facebook.com"}>
            <Image src={facebook} alt="facebook" width={23} height={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
