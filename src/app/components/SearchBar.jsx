import Image from "next/image";
import searchIcon from "../assets/icons/search-icon.svg";

export default function SearchBar() {
  return (
    <div className="bg-white px-2 py-1 mx-6 w-full h-9 flex items-center gap-2 rounded-[999px] border border-[var(--gray-200)] dark:bg-[var(--dark-bg-primary)] dark:border-[var(--gray-700)] md:w-72">
      <Image src={searchIcon} alt="search-icon" />
      <input
        type="text"
        placeholder="Search..."
        className="border-none outline-none w-full h-full bg-inherit"
      />
    </div>
  );
}
