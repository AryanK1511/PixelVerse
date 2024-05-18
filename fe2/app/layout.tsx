'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@propelauth/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider authUrl={"https://4786483622.propelauthtest.com"}>
        <body className={inter.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}
