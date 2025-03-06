import React from 'react';

const TextField = ({ type = 'text', placeholder, name, onChange }) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        className="mt-3 w-full p-2 px-6"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
