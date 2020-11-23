import React, { useContext, useState } from "react";
import { SearchBarContext } from "../context/TestCharacterContext";
import { HiFilter } from "react-icons/hi";

export default function NavBar() {
  const [searchValue, setSearchValue, searchCharacter] = useContext(
    SearchBarContext
  );
  const [showFilters, setShowFilters] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    status: "",
    gender: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    let test = { [name]: value };
    setFilterOptions((prev) => {
      return {
        ...prev,
        ...test,
      };
    });
  }
  window.addEventListener("scroll", () => setShowFilters(false));
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
                searchCharacter(searchValue, filterOptions);
                setSearchValue("");
              }
            }
          }}
          onFocus={() => setShowFilters(false)}
        />
        <div className={showFilters ? "filter-options show" : "filter-options"}>
          <div className="filter-option">
            <label>Status: </label>
            <select
              name="status"
              id="status"
              value={filterOptions.status}
              onChange={handleChange}
            >
              <option value="">All</option>
              <option value="Alive">Alive</option>
              <option value="Dead">Dead</option>
              <option value="Unknown">Unknown</option>
            </select>
          </div>
          <div className="filter-option">
            <label>Gender: </label>
            <select
              name="gender"
              id="gender"
              value={filterOptions.gender}
              onChange={handleChange}
            >
              <option value="">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
        <HiFilter
          size="1.5rem"
          className="filter-icon"
          onClick={() => setShowFilters((prev) => !prev)}
        />
      </div>
    </nav>
  );
}
