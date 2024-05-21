'use client'
import { ThemeProvider } from 'next-themes';
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import Hero from "./components/Hero";

export default function Home() {

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <NextUIProvider>
          <Hero />
      </NextUIProvider>
    </ThemeProvider>
  );
}
