import React from "react";
import { useState } from "react";

export const Search = () => {
    let [searchText, setSearchText] = useState("");
    return (
      <div id="search-comp">
        <input
          type="text"
          id="search-bar"
          placeholder="You can Filter here  ..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => filterRests(searchText, allRestaurants)}
          id="search-btn"
        >
          🔍Search{" "}
        </button>
      </div>
    );
  };
export default Search;
