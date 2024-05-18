"use client";
import React, { useEffect } from "react";
import { useLogoutFunction } from "@propelauth/react";
import { useRouter } from "next/navigation";
import { withAuthInfo, WithAuthInfoProps } from "@propelauth/react";

export const Navbar = withAuthInfo((props: WithAuthInfoProps) => {
  const logoutFunction = useLogoutFunction();
  const router = useRouter();
  const navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[] = [
    {
      name: "Home",
      link: "/home",
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
    if (link === "/logout") {
      logoutFunction(true);
      return;
    }
    router.push(link);
  };

  useEffect(() => {
    if (!props.isLoggedIn) {
      router.push("/");
    }
  }, [props.isLoggedIn, router]);

  return (
    <></>
  );
});
