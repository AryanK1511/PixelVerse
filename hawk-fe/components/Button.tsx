import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Button({ children }: Props) {
  return (
    <button className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        {children}
      </div>
    </button>
  );
}
