'use client';
import React from "react";
import Business from "@/components/Business";
import { AuthProvider } from "@propelauth/react";


export default function Homepage() {

  return (
    <AuthProvider authUrl={process.env.NEXT_PUBLIC_AUTH_URL!}>
      <Business />;
    </AuthProvider>
  );

}
