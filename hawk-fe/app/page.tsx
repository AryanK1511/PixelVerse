"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import {NextUIProvider} from "@nextui-org/react";
import Hero from "@/components/Hero";

// ===== HOMEPAGE =====
export default function Landing() {
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
    <NextUIProvider>
      <main>
      <Hero />
      </main>
    </NextUIProvider>
  );
}
