import React from "react";
import { CardProps, ImageCard } from "./ImageCard";

interface Props {
  cardsProps: CardProps[];
  className?: string;
  children?: React.ReactNode;
}

export default function ImageCards({ cardsProps, className, children }: Props) {
  return (
    <div className={className}>
      {cardsProps.map((cardProp, i) => (
        <ImageCard key={i} {...cardProp} />
      ))}
      {children}
    </div>
  );
}
