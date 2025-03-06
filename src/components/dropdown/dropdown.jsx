import React from 'react';

const Dropdown = ({ placeholder, options = [], value, onChange }) => {
  return (
    <div>
      <select
        className="mt-3 w-full p-2 border px-6"
        value={value} 
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
