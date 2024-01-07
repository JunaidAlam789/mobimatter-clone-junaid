import React from "react";
import LargescreenNavbar from "./largescreenNavbar";
import MobileNavbar from "./mobileNavbar";
import uae from "/public/navbar/uae.svg";
import search from "/public/navbar/search.svg";
import send from "/public/navbar/send.svg";
import usa from "/public/navbar/usa.svg";
import europe from "/public/navbar/europe.svg";

export const navbarData = [
  {
    text: "New eSIM",
    href: "/",
  },
  {
    text: "Topup",
    href: "/topup",
  },
  {
    text: "Check Usage",
    href: "/usage",
  },
  // {
  //   text: "Blog",
  //   href: "/blog",
  // },
  // {
  //   text: "Help & Support",
  //   href: "/help",
  // },
  {
    text: "FAQs",
    href: "/faqs",
  },
];

export const dropdownMenuData = [
  {
    icon: search,
    label: "Search for a new eSIM",
    description: "Search for best mobile offers at home and when you travel",
    href: "/",
  },
  {
    icon: uae,
    label: "eSIM offers for UAE",
    description:
      "Best eSIM deals for the United Arab Emirates from the top providers worldwide",
    href: "/esim/United Arab Emirates",
  },
  {
    icon: send,
    label: "See all destinations",
    description: "",
    href: "/destinations",
  },
  {
    icon: usa,
    label: "eSIM offers for USA",
    description: "Enjoy the United States with 4G speeds from $1.2/GB",
    href: "/esim/America",
  },
  {
    icon: europe,
    label: "eSIM offers for Europe",
    description: "Enjoy the United States with 4G speeds from $1.2/GB",
    href: "/esim/Europe",
  },
];
export default function Navbar() {
  return (
    <div className="fixed bg-white w-full z-[80]">
      {/* Navbar for Large Screens */}
      <div className="hidden lg:block">
        <LargescreenNavbar />
      </div>
      {/* Navbar for Small Screens */}
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
}
