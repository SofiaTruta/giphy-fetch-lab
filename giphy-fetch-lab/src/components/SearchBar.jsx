import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a GIF..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
