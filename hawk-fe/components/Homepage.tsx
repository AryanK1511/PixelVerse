"use client";
import { CardProps, ImageCard } from "@/components/ImageCard";
import { Navbar } from "@/components/Navbar";
import { BentoGridDemo } from "./FullBentoGrid";
import { Background } from "./Background";

export default function Homepage() {
  const mockCardsProps: CardProps[] = [
    {
      title: "Card 1",
      description: "This is the description for Card 1",
      imageLink: "",
      points: 10,
    },
    {
      title: "Card 2",
      description: "This is the description for Card 2",
      imageLink: "",
      points: 15,
    },
    {
      title: "Card 3",
      description: "This is the description for Card 3",
      imageLink: "",
      points: 20,
    },
    {
      title: "Card 3",
      description: "This is the description for Card 3",
      imageLink: "",
      points: 20,
    },
    {
      title: "Card 3",
      description: "This is the description for Card 3",
      imageLink: "",
      points: 20,
    },
    // Add more mock data as needed
  ];
  return (
    <>
      <Navbar />  
      <BentoGridDemo />
    </>
  );
}
