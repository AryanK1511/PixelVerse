'use client';
import Button from "@/components/Button";
import Link from "next/link";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    console.log(process.env.REACT_APP_AUTH_URL!);
  }, []);
  return (
      <main className="mt-2">
        <div className="flex justify-around">
          <Link href={process.env.NEXT_PUBLIC_AUTH_URL!}><Button>User</Button></Link>
          <Button>Business</Button>
        </div>
      </main>

  );
}
