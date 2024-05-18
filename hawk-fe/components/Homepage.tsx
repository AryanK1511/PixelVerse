"use client";

import { Navbar } from "@/components/Navbar";
import { withAuthInfo, WithAuthInfoProps } from "@propelauth/react";
import { BentoGridDemo } from "./FullBentoGrid";

// ===== USER DASHBOARD =====
const Homepage = withAuthInfo((props: WithAuthInfoProps) => {
  return (
    <>
      <Navbar />
      <BentoGridDemo />
    </>
  );
});

export default Homepage;

