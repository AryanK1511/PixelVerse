"use client";

import React from "react";

// ===== BUTTON COMPONENT =====
interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={
        "px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition duration-300 " +
        className
      }
    >
      {text}
    </button>
  );
};

export default Button;

