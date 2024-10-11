import React from "react";

interface ButtonProps {
  href: string; 
  text: string; 
  className?: string;  // Add the optional className prop
}

const Button: React.FC<ButtonProps> = ({ href, text, className }) => {
  return (
    <a
      href={href}
      className={`relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group ${className}`} // Use className here
    >
      <span className="w-52 h-48 rounded rotate-[-40deg] bg-red-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
        {text}
      </span>
    </a>
  );
};

export default Button;
