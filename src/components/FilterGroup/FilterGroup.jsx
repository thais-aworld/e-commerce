import React from 'react';
import './FilterGroup.css';

const FilterGroup = ({ title, inputType, options, onFilterChange, activeFilters = [] }) => {
  return (
    <div className="filter-group">
      <h4 className="filter-group-title">{title}</h4>

      <div className="filter-options">
        {options.map((option) => (
          <label key={option.value} className="filter-option-label">
            <input
              type={inputType}
              name={title}
              value={option.value}
              checked={activeFilters.includes(option.value)}
              onChange={() => onFilterChange(title, option.value)}
              className="filter-option-input"
            />
            {option.text}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;
