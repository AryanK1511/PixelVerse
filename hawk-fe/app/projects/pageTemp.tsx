"use client";

import React, { useEffect } from "react";
import { CardProps, ImageCard } from "@/components/ImageCard";
import { Navbar } from "@/components/Navbar";
import { Background } from "@/components/Background";
import ImageCards from "@/components/ImageCards";
import Button from "@/components/Button";
import { AuthProvider } from "@propelauth/react";
import { getAllProjects } from "@/utils/lib";
import { withAuthInfo, WithAuthInfoProps } from "@propelauth/react";

// ===== PROJECTS PAGE =====
const Projects = withAuthInfo((props: WithAuthInfoProps) => {
  // Set state to store the projects
  const [projects, setProjects] = React.useState<any[]>([]);

  // Get the user email from the props
  const email = props.user?.email;
  
  // Get all the projects for everyone except the user
  useEffect(() => {
    async function fetchData() {
      const response = await getAllProjects(email);
      console.log(response.data);

      if (!response.success) {
        console.error("Error fetching data");
      } else {
        // Set the projects in the state
        setProjects(response.data);
      }
    }

    fetchData();
  }, [])
  

  return (
    <AuthProvider authUrl={process.env.NEXT_PUBLIC_AUTH_URL!}>
      <Background className="w-screen h-full min-h-screen">
        <Navbar />
        {/* <ImageCards
          className="grid grid-cols-3 gap-x-16 gap-y-20 pt-20"
          cardsProps={mockCardsProps}
        /> */}
        <Button text="+" className="my-10" />
      </Background>
    </AuthProvider>
  );
});

export default Projects;
