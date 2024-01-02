import EsimCard from "@/components/esimCard";
import three from "/public/homepage/esimCard/3.png";
import bouygues from "/public/homepage/esimCard/bouygues.png";
import sparks from "/public/homepage/esimCard/sparks.png";
import { StaticImageData } from "next/image";
import usa from "/public/navbar/usa.svg";
import uae from "/public/navbar/uae.svg";
import europe from "/public/navbar/europe.svg";

export interface simDataT {
  logo: StaticImageData;
  package: string;
  company: string;
  validity: string;
  data: string;
  price: string;
  tag?: string;
  network?: string;
  countries?: string[];
  activeCountries: number;
}

const simData = [
  {
    logo: three,
    package: "Global 13 GB",
    company: "3",
    validity: "365 days",
    data: "13 GB",
    price: "39.99",
    tag: "Best Coverage",
    network: "5G",
    countries: [usa, uae, europe],
    activeCountries: 70,
  },
  {
    logo: bouygues,
    package: "EU 30 GB Unlimited Calls",
    company: "Bouygues",
    validity: "30 days",
    data: "30 GB",
    price: "40.99",
    tag: "",
    network: "",
    countries: [usa, uae, europe],
    activeCountries: 102,
  },
  {
    logo: sparks,
    package: "Europe and USA Yearly 30 GB",
    company: "Sparks",
    validity: "365 days",
    data: "30 GB",
    price: "39.99",
    tag: "Winter Special",
    network: "5G",
    countries: [usa, uae, europe],
    activeCountries: 98,
  },
  {
    logo: three,
    package: "Singapore Malaysia and Thailand 30 GB",
    company: "3",
    validity: "365 days",
    data: "20 GB",
    price: "49.99",
    tag: "",
    network: "5G",
    countries: [usa, uae, europe],
    activeCountries: 90,
  },
  {
    logo: bouygues,
    package: "Europe and USA Yearly 30 GB",
    company: "Bouygues",
    validity: "30 days",
    data: "25 GB",
    price: "42.99",
    tag: "Best Quality",
    network: "",
    countries: [usa, uae, europe],
    activeCountries: 110,
  },
  {
    logo: sparks,
    package: "Japan 10 GB",
    company: "Sparks",
    validity: "30 days",
    data: "40 GB",
    price: "49.99",
    tag: "",
    network: "5G",
    countries: [usa, uae, europe],
    activeCountries: 120,
  },
  {
    logo: three,
    package: "Discover Global 20 GB",
    company: "3",
    validity: "30 days",
    data: "25 GB",
    price: "45.99",
    tag: "Winter Special",
    network: "5G",
    countries: [usa, uae, europe],
    activeCountries: 95,
  },
  {
    logo: bouygues,
    package: "EU 30 GB Unlimited Calls",
    company: "Bouygues",
    validity: "365 days",
    data: "20 GB",
    price: "39.99",
    tag: "",
    network: "",
    countries: [usa, uae, europe],
    activeCountries: 80,
  },
  {
    logo: sparks,
    package: "Asia 10 Countries 20 GB",
    company: "Sparks",
    validity: "30 days",
    data: "15 GB",
    price: "34.99",
    tag: "Best Coverage",
    network: "4G",
    countries: [usa, uae, europe],
    activeCountries: 75,
  },
];

export default function EsimOffers() {
  return (
    <div className="max-w-[1200px] px-5 mt-10 mx-auto">
      <h2 className="text-#1A202C text-lg font-medium">Popular eSIM offers</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center mt-4">
        {simData.map((item, index) => (
          <EsimCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
