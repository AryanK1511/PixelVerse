"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "./cn";
import { useLogoutFunction } from "@propelauth/react";
import { useRouter } from "next/navigation";
import { withAuthInfo, WithAuthInfoProps } from "@propelauth/react";

// export const Navbar = withAuthInfo((props: WithAuthInfoProps) => {
export const Navbar = () => {
  // const logoutFunction = useLogoutFunction();
  const router = useRouter();
  const navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "My Projects",
      link: "/projects",
    },
    {
      name: "Logout",
      link: "/logout",
    },
  ];

  const navRedirect = (link: string) => {
    console.log(link);
    if (link === "/logout") {
      // logoutFunction(true);
      return;
    }
    router.push(link);
  };

  useEffect(() => {
    // if (!props.isLoggedIn) {
    //   router.push("/");
    // }
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-0 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-4  items-center justify-center space-x-4"
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <button
            key={`link=${idx}`}
            onClick={() => navRedirect(navItem.link)}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 p-1"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-md font-bold">
              {navItem.name}
            </span>
          </button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
