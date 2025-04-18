import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SearchBar from "../../components/SearchBar";

const SearchResultsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const type = new URLSearchParams(location.search).get("type");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      if (type === "image") {
        setTimeout(() => {
          setResults([
            { id: 1, title: "Mock Image Result 1", description: "Similar image item found.", image: "https://via.placeholder.com/150" },
            { id: 2, title: "Mock Image Result 2", description: "Another matching image result.", image: "https://via.placeholder.com/150" }
          ]);
        }, 800);
      } else {
        axios.get(`https://dummyjson.com/products/search?q=${query}`)
          .then(res => setResults(res.data.products));
      }
    }
  }, [query, type]);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <SearchBar initialQuery={query} />
      <h2 className="mt-4 text-gray-700">Results for: <strong>{query}</strong> ({type})</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {results.map(product => (
          <div key={product.id} className="border rounded-lg p-4 shadow-sm">
            {type === "image" && product.image && (
              <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-md mb-2" />
            )}
            <a href="#" className="text-blue-600 text-lg font-medium hover:underline">{product.title}</a>
            <p className="text-gray-600 text-sm mt-1">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;