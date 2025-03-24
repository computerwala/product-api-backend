import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.length >= 3) {
      navigate(`/?search=${query}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center justify-center p-4">
      <input
        type="text"
        placeholder="Search for products..."
        className="border p-2 rounded-md w-1/2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
        Click button to search
      </button>
    </form>
  );
};

export default SearchBar;