import React from "react";
import { CardProps, ImageCard } from "./ImageCard";
import { getUserProjects } from "@/utils/lib/projects";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const cardsProps = [{}]

export default function ImageCards({ className, children }: Props) {
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState<{
    title: string;
    description: string;
    imageLink: string;
    points: number;
  }>({title: "", description: "", imageLink: "", points: 0});

  const handleOpen = (item:any) => {
    setItem(item);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  // Set state to store the projects
  const [projects, setProjects] = React.useState<any[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await getUserProjects("email");
      console.log("ARYANANNNANANANA:", response.data);

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
    
    <div className={className}>
      {cardsProps.map((cardProp, i) => (
        <ImageCard key={i} {...cardProp} />
      ))}
      {children}
    </div>
  );
}
