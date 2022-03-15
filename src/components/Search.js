import React from "react";

const Search = ({ value, searchchange }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      className="form-control"
      onChange={searchchange}
    />
  );
};

export default Search;
