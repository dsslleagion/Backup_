// Input.js
import React from 'react';

const Input = ({ label, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">{label}</label>
      <input
        type={type}
        className="border border-gray-400 rounded px-3 py-2 w-full"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
