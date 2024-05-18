'use client';
import Button from "@/components/Button";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Background } from "@/components/Background";
import { BackgroundGradient } from "@/components/BackgroundGradient";
import { Card, CardTitle } from "@/components/Card";
import { Navbar } from "@/components/Navbar";


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
    <Background className="w-screen h-screen">
      <div className="flex justify-around w-screen">
        <div className="w-[20%] flex flex-col items-center">
          <BackgroundGradient>
            <Card>
              <CardTitle>
                Lorem Ipsum Generator Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.
              </CardTitle>
              <Button className="flex items-center mt-5" onClick={userLogin}>User</Button>
            </Card>
          </BackgroundGradient>
        </div>
        <div className="w-[20%] flex flex-col items-center">
          <BackgroundGradient>
            <Card>
              <CardTitle>
                Lorem Ipsum Generator Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.
              </CardTitle>
              <Button className="flex items-center mt-5" onClick={businessLogin}>Business</Button>
            </Card>
          </BackgroundGradient>
        </div>
      </div>
    </Background>
  );
}
