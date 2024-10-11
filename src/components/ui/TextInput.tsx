"use client";

import React from "react";

interface TextInputProps {
  name: string;
  id: string;
  label: string;
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  name,
  id,
}) => {
  return (
    <div>
      <label className="block text-gray-200 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        name={name}
        id={id}
        type="text"
        className="w-full px-4 py-2 border text-gray-200 border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-transparent transition-colors duration-300"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
