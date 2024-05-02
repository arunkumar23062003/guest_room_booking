import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaFilter } from "react-icons/fa";

const FilterAndSort = () => {
  return (
    <div className="w-full h-full flex flex-row justify-end items-center gap-3">
      <div className="w-">
        <Select>
          <SelectTrigger className="w-[180px] focus-visible:ring-0 border border-2 border-gray-300">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Name</SelectLabel>
              <SelectItem value="atoz">A to Z</SelectItem>
              <SelectItem value="ztoa">Z to A</SelectItem>
              <SelectLabel>Price</SelectLabel>
              <SelectItem value="lowtohigh">Low to High</SelectItem>
              <SelectItem value="higntolow">High to Low</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="cursor-pointer">
        <FaFilter className="h-7 w-7 text-gray-700"/>
      </div>
    </div>
  );
};

export default FilterAndSort;
