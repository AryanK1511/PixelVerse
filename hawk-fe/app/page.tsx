"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FlipWords } from "@/components/FlipWords";
import Button from "@/components/Button";

// ===== HOMEPAGE =====
export default function Home() {
  // Router
  const router = useRouter();

  // Handle sign in
  const handleSignIn = async () => {
    // Set the type of the user in local storage
    localStorage.setItem("user-type", "user");

    // Redirect the user to the auth page
    router.push(process.env.NEXT_PUBLIC_AUTH_URL!);
  };

  return (
    <>
      <div className="h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex flex-column items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="text-left relative z-20">
          <p className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Dataset Generator
          </p>
          <div className="text-xl">
            <span>The industry standard tool for</span>
            <FlipWords
              words={["AI Startups", "ML Enthusiasts", "Hackers", "Students"]}
              duration={3000}
            />
          </div>
          <div className="mt-8">
            <Button onClick={handleSignIn} text="Get Started"></Button>
          </div>
        </div>
      </div>
    </>
  );
}
