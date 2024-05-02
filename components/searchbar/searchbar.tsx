import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="border w-[90%] h-full shadow-xl border border-2 rounded-xl flex">
        <div className="w-10 h-full border-r-2 flex justify-center items-center">
          <FaSearch className="text-xl" />
        </div>
        <div className="flex-1 h-full flex px-2 items-center">
          <p>Search here...</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
