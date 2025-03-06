import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <div>
      <button 
        className='mt-3 w-full p-2 px-6'
        style={{ backgroundColor: 'var(--global-white-choco-color)', fontSize: '16px' }} 
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
