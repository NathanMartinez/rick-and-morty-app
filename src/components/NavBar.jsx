import React, { useContext } from "react";
import {
  SearchBarContext,
  TestCharacterContext,
} from "../context/TestCharacterContext";
import { HiFilter } from "react-icons/hi";

export default function NavBar() {
  const [searchValue, setSearchValue, searchCharacter] = useContext(
    SearchBarContext
  );
  return (
    <nav>
      <div className="logo">
        <h1>Rick and Morty App</h1>
        <span>Created By Nathan Martinez</span>
      </div>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Rick Sanchez"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              // Lets first validate that what is entered in this field exists in the API
              if (searchValue) {
                searchCharacter(searchValue);
                setSearchValue("");
              }
            }
          }}
        />
        <HiFilter size="1.5rem" className="filter-icon" />
      </div>
    </nav>
  );
}
