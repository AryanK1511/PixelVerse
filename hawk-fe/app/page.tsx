"use client";
import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-">
      <div className="flex justify-around">
        <Button>User</Button>
        <Button>Business</Button>
      </div>
    </main>
  );
}
