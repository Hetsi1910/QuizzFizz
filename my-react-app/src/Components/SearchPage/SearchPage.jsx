import { useState } from "react";
import './SearchPage.css'; 
import logo from '../assets/logo.png';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to store user input
  const [searchResults, setSearchResults] = useState([]); // State to store search results

  const handleSearch = () => {
    if (searchQuery.trim()) { // Check if input is not empty
      // Generate dynamic results based on the input query
      const results = Array.from({ length: 5 }, (_, i) => `${searchQuery} Result ${i + 1}`);
      setSearchResults(results); // Update search results
    } else {
      setSearchResults([]); // Clear results if input is empty
    }
  };

  return (
    <div className="search-container">
      {/* Logo Section */}
      <header>
        <div className="search-header">
          <img src={logo} alt="QuizFizz Logo" className="search-logo" />
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Search Section */}
        <div>
          <h2 className="search-title">SEARCH THE TOPIC HERE</h2>
          <div className="search-box">
            <input
              type="text"
              placeholder="🔍 Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
            />
            <button onClick={handleSearch}>Search</button>
          </div>

          {/* Display Search Results */}
          {searchResults.length > 0 && (
            <div className="search-results">
              <h3>Search Results:</h3>
              <ul>
                {searchResults.map((result, index) => (
                  <li key={index}>{result}</li> // Display each search result
                ))}
              </ul>
            </div>
          )}

          {/* Difficulty Level Section */}
          <div className="difficulty-container">
            <h3>Select Difficulty Level:</h3>
            <select>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
