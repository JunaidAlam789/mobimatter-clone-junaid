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
  data,
  placeholder,
}: {
  onSelect: (value: string) => void;
  className?: string;
  data: { value: string; label: string }[];
  placeholder: string;
}) {
  // const [val, selectedVal] = React.useState("");
  return (
    <Select
      onValueChange={(value) => {
        onSelect(value);
      }}
    >
      <SelectTrigger
        className={cn(
          "min-[370px]:w-[180px] focus:ring-0 focus:ring-offset-0 bg-transparent border-2 ",
          className
        )}
      >
        <SelectValue placeholder={placeholder} />
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
