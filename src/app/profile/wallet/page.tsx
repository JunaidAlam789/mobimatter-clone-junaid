"use client";
import React, { useState, useEffect } from "react";
import { Info, DollarSign } from "lucide-react";

import WalletPageComponent from "@/components/profilePageComponents/WalletPageComponent";

const Wallet = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // console.log(width);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <div className="w-screen min-h-screen lg:px-[22rem] px-[2rem]">
      <p className="pt-10 text-lg">MobiMatter Rewards</p>
      <div className="w-full h-[12rem] bg-darkblue rounded-sm dropshadow-md p-[1rem] text-white flex flex-col justify-between">
        <div className="flex flex-col justiy-end space-y-4">
          <p>MobiPay balance</p>
          <div className="flex items-center">
            <DollarSign size={`${width < 1024 ? 40 : 60}`} />
            <p className="lg:text-[4rem] text-[2rem]">0.00</p>
          </div>
        </div>
        <div className="flex items-center text-sm">
          <Info size="16" />
          <p className="pl-1">Get 10% cashback with every purchase!</p>
        </div>
      </div>
      <WalletPageComponent />
    </div>
  );
};

export default Wallet;
