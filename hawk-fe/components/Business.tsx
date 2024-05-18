"use client";
import { Background } from "@/components/Background";
import { BackgroundGradient } from "@/components/BackgroundGradient";
import Button from "@/components/Button";
import { CardProps, ImageCard } from "@/components/ImageCard";
import ImageCards from "@/components/ImageCards";
import { Navbar } from "@/components/Navbar";

export default function Business() {
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
    <Background className="w-screen h-full min-h-screen">
      <Navbar />
      <ImageCards
        className="grid grid-cols-3 gap-x-4 gap-y-16 pt-20"
        cardsProps={mockCardsProps}
      />
      <Button className="my-10">+</Button>
    </Background>
  );
}
