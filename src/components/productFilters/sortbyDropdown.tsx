import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SortbyDropdown({
  onSelect,
}: {
  onSelect: (value: string) => void;
}) {
  // const [val, selectedVal] = React.useState("");
  return (
    <Select
      onValueChange={(value) => {
        onSelect(value);
      }}
    >
      <SelectTrigger className="w-[180px] focus:ring-0 focus:ring-offset-0 bg-transparent border-2 ">
        <SelectValue placeholder="Recommended" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="recommended">Recommended</SelectItem>
          <SelectItem value="lowest price">Lowest price</SelectItem>
          <SelectItem value="most data allowance">
            Most data allowance
          </SelectItem>
          <SelectItem value="lowest price per gb">
            Lowest price per GB
          </SelectItem>
          <SelectItem value="longest validity">Longest validity</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
