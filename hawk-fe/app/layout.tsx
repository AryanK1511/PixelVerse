"use client";
import "./globals.css";
import React from "react";
import { AuthProvider } from "@propelauth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider authUrl={process.env.NEXT_PUBLIC_AUTH_URL!}>
<html lang="en">
      <body>{children}</body>
    </html>
    </AuthProvider>
    
  );
}
