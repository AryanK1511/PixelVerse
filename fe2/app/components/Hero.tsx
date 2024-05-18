import { Button } from '@nextui-org/react';
import { useRouter } from "next/navigation";
import React from 'react';


const Hero = () => {
    const router = useRouter();
    const handleSignIn = async () => {
      router.push(process.env.NEXT_PUBLIC_AUTH_URL!);
    };
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="justify-center">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white flex flex-col">
            <span className="text-transparent bg-gradient-to-tr from-yellow-600 to-purple-600 bg-clip-text">
              {"Dataset"}
            </span>
            <span className="text-5xl">{" Generator"}</span>
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            The industry standard tool for{" "}
            <span className="text-transparent bg-gradient-to-tr from-yellow-600 to-purple-600 bg-clip-text">
              Hackers, ML Enthusiasts, and Data Scientists.
            </span>
          </p>
            <Button color="default" onClick={handleSignIn}>Get started</Button>
        </div>
      </div>
    );
}

export default Hero;