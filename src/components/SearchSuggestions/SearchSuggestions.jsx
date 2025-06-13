import React from 'react';
import './SearchSuggestions.css';

const SearchSuggestions = ({ suggestions, activeIndex, onClick, onMouseOver }) => {
  if (!suggestions.length) return null;
  return (
    <ul className="suggestions-list">
      {suggestions.map((item, i) => (
        <li
          key={i}
          className={i === activeIndex ? 'active' : ''}
          onClick={() => onClick(item.name)}
          onMouseOver={() => onMouseOver(i)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default SearchSuggestions;
