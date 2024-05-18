'use client';
import React from "react";
import Homepage from "@/components/Homepage";
import { AuthProvider } from "@propelauth/react";


export default function Home() {

  return (
    <AuthProvider authUrl={process.env.NEXT_PUBLIC_AUTH_URL!}>
      <Homepage />;
    </AuthProvider>
  );

}
