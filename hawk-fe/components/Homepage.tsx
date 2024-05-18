"use client";
import { Navbar } from "@/components/Navbar";
import { BentoGridDemo } from "./FullBentoGrid";
import { Background } from "./Background";

export default function Homepage() {
  return (
    <>
      <Navbar />  
      <BentoGridDemo />
    </>
  );
}

