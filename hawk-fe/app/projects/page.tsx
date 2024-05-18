"use client";
import { CardProps, ImageCard } from "@/components/ImageCard";
import { Navbar } from "@/components/Navbar";
import { Background } from "@/components/Background";
import ImageCards from "@/components/ImageCards";
import Button from "@/components/Button";

export default function page() {
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
      <Background className="w-screen h-full min-h-screen">
        <Navbar />
        <ImageCards
          className="grid grid-cols-3 gap-x-16 gap-y-20 pt-20"
          cardsProps={mockCardsProps}
        />
        <Button text="+" className="my-10" />
      </Background>
    </>
  );
}
