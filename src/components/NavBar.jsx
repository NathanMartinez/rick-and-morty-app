import React from "react";
import { HiFilter } from "react-icons/hi";

export default function NavBar() {
  return (
    <nav>
      <div className="logo">
        <h1>Rick and Morty App</h1>
        <span>Created By Nathan Martinez</span>
      </div>
      <div className="search-filter">
        <input type="text" placeholder="Rick Sanchez" />
        <HiFilter size="1.5rem" className="filter-icon" />
      </div>
    </nav>
  );
}
