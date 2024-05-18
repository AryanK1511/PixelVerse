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
      
        <html lang="en">
          <AuthProvider authUrl={process.env.NEXT_PUBLIC_AUTH_URL!}>
          <body>{children}</body>
          </AuthProvider>
        </html>
      
  );
}
