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

export function CustomDropDown({
  onSelect,
  className,
  data ,
  placeholder,
  provider,
  country
}: {
  onSelect: (value: string) => void;
  className?: string;
  data: { value: string; label: string }[];
  placeholder : string;
  provider ?: string;
  country ?: string;
}) {
  console.log("🚀 ~ file: CustomDropDown.tsx:28 ~ country:", country)
  // console.log("🚀 ~ file: CustomDropDown.tsx:26 ~ paramsProvider:", provider)
  const [selected, setSelected] = React.useState<string>(provider! || "");
  // const [val, selectedVal] = React.useState("");
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
        <SelectValue defaultValue={provider || ""} placeholder={placeholder} />
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
