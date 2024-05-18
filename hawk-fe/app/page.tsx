'use client';
import Button from "@/components/Button";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  const userLogin = async () => {
    localStorage.setItem("user-type", "user");
    router.push(process.env.NEXT_PUBLIC_AUTH_URL!);
  }

  const businessLogin = async () => {
    localStorage.setItem("user-type", "business");
    router.push(process.env.NEXT_PUBLIC_AUTH_URL!);
  }

  useEffect(() => {
    console.log(process.env.REACT_APP_AUTH_URL!);
  }, []);
  return (
      <main className="mt-2">
        <div className="flex justify-around">
          <button onClick={userLogin}>User</button>
          <button onClick={businessLogin}>Business</button>
        </div>
      </main>

  );
}
