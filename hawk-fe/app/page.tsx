"use client";
import Button from "@/components/Button";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Signup",
      link: "/signup",
    },
  ];
  return (
    <main>
      <Navbar navItems={navItems} />
      <div className="flex justify-around">
        <Button className="mt-80">User</Button>
        <Button className="mt-80">Business</Button>
      </div>
    </main>
  );
}
