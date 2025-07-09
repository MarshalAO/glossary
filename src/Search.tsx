import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Search.css';

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function Search({ searchTerm, setSearchTerm }: SearchProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    const newUrl = `${window.location.pathname}?q=${encodeURIComponent(value)}`;
    window.history.replaceState(null, '', newUrl);
  };

  return (
    <div id="search">
      <div id="search-box">
        <input
          type="text"
          className="input"
          placeholder="Type something..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="btn">
          {React.createElement(FaSearch as React.ElementType)}
        </button>
      </div>
    </div>
  );
}