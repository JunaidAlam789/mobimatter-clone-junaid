"use client";
import { useState } from "react"; // Import useState hook if not already imported
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import info from "../../../../public/checkout/info.svg";
import payment from "../../../../public/checkout/payment.svg";
import check from "../../../../public/checkout/check.svg";
export default function TopBar() {
  // Use state to manage the color of separators and icons dynamically
  const [separatorColor, setSeparatorColor] = useState("bg-green-300");

  // // Function to update color based on payment progress
  // const updateColor = (color: any) => {
  //   setSeparatorColor(color);
  // };

  return (
    <div className="flex items-center w-screen">
      <Separator className={`py-1 ${separatorColor} w-[18%]`} />
      <div className="space-y-3 text-center text-sm mt-7">
        <Image src={info} alt="icon" width={40} height={40} />
        <p className="text-txtgrey">Info</p>
      </div>
      <Separator className={`py-1 bg-gray-200 w-[27.8%]`} />
      <div className="space-y-3 text-center text-sm mt-7">
        <Image src={payment} alt="icon" width={40} height={40} />
        <p className="text-txtgrey">Payment</p>
      </div>
      <Separator className={`py-1 bg-gray-200 w-[27.8%]`} />
      <div className="space-y-3 text-center text-sm mt-7">
        <Image src={info} alt="icon" width={40} height={40} />
        <p className="text-txtgrey">Complete</p>
      </div>
      <Separator className={`py-1 bg-gray-200 w-[18%]`} />
    </div>
  );
}
