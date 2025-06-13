import React, { useState } from 'react';
import './ProductOptions.css';

const ProductOptions = ({ options, radius, shape, type }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const optionStyle = (option) => {
    const style = {};
    if (shape === 'square') {
      style.borderRadius = radius || '0px';
    } else if (shape === 'circle') {
      style.borderRadius = '50%';
    }

    if (type === 'color') {
      style.backgroundColor = option;
      style.border = `1px solid var(--light-gray-2)`; 
    } else { 
      style.border = `1px solid var(--light-gray-2)`;
    }

    if (selectedOption === option) {
      style.border = `2px solid var(--primary)`;
    }
    return style;
  };

  return (
    <div className="product-options-container">
      {options.map((option, index) => (
        <div
          key={index}
          className={`option-item ${shape} ${type} ${selectedOption === option ? 'selected' : ''}`}
          style={optionStyle(option)}
          onClick={() => handleOptionClick(option)}
        >
          {type === 'text' && <span className="option-text">{option}</span>}
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;