"use client";

import * as React from "react";
import Image from "next/image";
import { Check, ChevronsUpDown, SearchIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";

export function SelectBox({
  countries,
  className,
  provider,
}: {
  countries: any;
  className?: string;
  provider: string;
}) {
//   console.log("provider ------>", provider);
  
  // countries.map((country: any) => console.log("country", country.name));
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  // console.log("VALUE", value);
  // const findcountry = countries.find((country: any) => country.name == value);
  // console.log("findcountry", findcountry);

  function capitalizeEachWord(str: string) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full py-2 justify-between text-gray-500 hover:bg-white shadow-md h-16"
          )}
        >
          {value
            ? countries.find((country: any) => country.name === value).name
            : "Search for a destination!"}
          {/* <button className="  bg-[#38BDEF] rounded-full text-white  hover:bg-[#38BDEF] hover:opacity-70 transition duration-500 ease-in-out p-2 sm:p-2 md:p-2 lg:p-2  xl:p-2.5 ml-auto">
            <SearchIcon className="h-5 w-5" />
          </button> */}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        avoidCollisions={false}
        className={cn("w-[80dvw] h-80", className)}
      >
        <Command>
          <CommandInput placeholder="Search country ..." />
          <CommandEmpty>No country found</CommandEmpty>
          <CommandGroup className="overflow-y-scroll">
            {countries.map((country: any) => (
              <CommandItem
                key={country.name}
                value={country.name}
                onSelect={(currentValue) => {
                  const newValue = capitalizeEachWord(currentValue);
                  setValue(newValue);
                  setOpen(false);
                  router.push(`/topup/${provider}/${newValue}`);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === country.name ? "opacity-100" : "opacity-0"
                  )}
                />
                <div className="flex items-center gap-2">
                  <Image
                    src={country.flag}
                    alt={country.name}
                    height={20}
                    width={20}
                  />
                  {country.name}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
