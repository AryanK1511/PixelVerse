"use client";
import { Background } from "@/components/Background";
import { BackgroundGradient } from "@/components/BackgroundGradient";
import Button from "@/components/Button";
import { Card, CardTitle } from "@/components/Card";
import { Navbar } from "@/components/Navbar";

export default function Home() {
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
              <Button className="flex items-center mt-5">User</Button>
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
              <Button className="flex items-center mt-5">Business</Button>
            </Card>
          </BackgroundGradient>
        </div>
      </div>
    </Background>
  );
}
