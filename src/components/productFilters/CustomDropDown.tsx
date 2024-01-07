import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function CustomDropDown({
  onSelect,
  className,
  data ,
  placeholder,
  provider,
  country,
  providerDetails,
}: {
  onSelect: (value: string) => void;
  className?: string;
  data: { value: string; label: string }[];
  placeholder : string;
  provider ?: string;
  country ?: string;
  providerDetails ?: { providerName : string; providerLogo : string}[];
}) {
  const pathname = usePathname();
  let paramsProvider = pathname.split("/")[2];

  // Check if paramsProvider matches any of the specified values
  // const validProviders = ["All", "Sparks", "3", "Ubigi", "eSIMGo", "Airalo"];
     const validProviders = providerDetails?.map((item) => item.providerName);
  if (!validProviders?.includes(paramsProvider)) {
    paramsProvider = ''; // Set to an empty string if not in the valid list
  }

  return (
    <Select
      onValueChange={(value) => {
        onSelect(value );
      }}
    >
      <SelectTrigger
        className={cn(
          "w-[180px] focus:ring-0 focus:ring-offset-0 bg-transparent border-2 ",
          className
        )}
      >
         {/* Use paramsProvider as the initial value if available, otherwise use an empty string */}
        <SelectValue   placeholder={paramsProvider || placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data.map((item) => (
            <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
          ))}
          {/* <SelectItem value="recommended">Recommended</SelectItem>
          <SelectItem value="lowest price">Lowest price</SelectItem>
          <SelectItem value="most data allowance">
            Most data allowance
          </SelectItem>
          <SelectItem value="lowest price per gb">
            Lowest price per GB
          </SelectItem>
          <SelectItem value="longest validity">Longest validity</SelectItem> */}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
