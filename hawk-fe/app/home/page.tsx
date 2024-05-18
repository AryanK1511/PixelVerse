'use client';
import React from "react";
import HomepageComponent from "@/components/Homepage";
import { AuthProvider } from "@propelauth/react";


export default function Homepage() {

  return (
    <AuthProvider authUrl={process.env.NEXT_PUBLIC_AUTH_URL!}>
      <HomepageComponent />  
    </AuthProvider>
  );
}
