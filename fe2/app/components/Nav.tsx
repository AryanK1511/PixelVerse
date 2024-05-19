"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useLogoutFunction, withAuthInfo, WithAuthInfoProps } from "@propelauth/react";
import { useRouter } from "next/navigation";
import { storeUserDetailsAfterAuthentication } from "../utils/userAuth";

// ==== NAVBAR COMPONENT ====
const Nav = (props: WithAuthInfoProps) => {
  const logoutFunction = useLogoutFunction();
  const router = useRouter();

  // Check if the user is logged in
  useEffect(() => {
    if (!props.isLoggedIn) {
      router.push("/");
    } 

    // Store the user details after authentication
    async function storeUserDetails() {
      const response = await storeUserDetailsAfterAuthentication(props.user?.email!);
      if (!response.success) {
        console.error(response.message);
      }
    }

    storeUserDetails();
  }, [props.isLoggedIn, props.user?.email, router]);

  const handleLogout = () => {
    logoutFunction(true);
  };

  return (
    <Navbar className="nav-bar">
      <NavbarBrand>
        <Image src="/logo.png" alt="Pixelverse" width={42} height={42} />
        <p className="font-bold text-inherit text-xl ml-4"><span style={{color: "#283618"}}>Pixel</span><span style={{ color: "#606c38" }}>Verse</span></p>
      </NavbarBrand>
      <NavbarContent justify="center" className="flex gap-4">
        <NavbarItem>
          <Link href="#" className="nav-link-1">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <button onClick={handleLogout} className="nav-link-2" >
            Logout
          </button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default withAuthInfo(Nav);
