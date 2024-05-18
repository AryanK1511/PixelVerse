'use client'
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import Hero from "./components/Hero";

export default function Home() {

  return (
    <NextUIProvider>
        <Hero />
    </NextUIProvider>
  );
}
