"use client";;

import * as React from 'react';
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ChangeEvent, useState } from "react";
import { getAllProjects } from "@/utils/lib/projects";
import Image from 'next/image';
import { withAuthInfo, WithAuthInfoProps } from "@propelauth/react";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export const BentoGridDemo = withAuthInfo((props: WithAuthInfoProps) => {
  const [gemError, setGemError] = React.useState("");
  const [item, setItem] = React.useState<{
    title: string;
    description: string;
    header: React.ReactNode;
    icon: React.ReactNode;
  }>({title: "", description: "", header: "", icon: ""});

  const [open, setOpen] = React.useState(false);

  const handleOpen = (item:any) => {
    setItem(item);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  // Set state to store the projects
  const [projects, setProjects] = React.useState<any[]>([]);
  const[items, setItems] = React.useState<any[]>([]);

  // Get the user email from the props
  const email = props.user?.email;

  // Get all the projects for everyone except the user
  React.useEffect(() => {
    async function fetchData() {
      const response = await getAllProjects(email);
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

  const [imageUrl, setImageUrl] = useState(null as string | null);

    const onSubmit = async () => {

        const fileInput = document.getElementById("upload-image") as HTMLInputElement;

        if (!fileInput.files) {
            console.warn("no file was chosen");
            return;
        }

        if (!fileInput.files || fileInput.files.length === 0) {
            console.warn("files list is empty");
            return;
        }

        const file = fileInput.files[0];

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("/api/image", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                console.error("something went wrong, check your console.");
                return;
            }

            const data: any = await res.json();
            if(data.url)
              setImageUrl(data.url);
            else
            setGemError(data.error);
        } catch (error) {
            console.error("something went wrong, check your console.");
        }
    };

  return (
    <>
    <BentoGrid className="max-w-4xl mx-auto mt-24">
      {projects.map((project, i) => (
        <BentoGridItem
          onClick={() => handleOpen(project)}
          key={i}
          title={project.title}
          description={project.description}
          header={<Skeleton img_link={project.sampleImages[0]}/>}
          icon={<span>{project.pointsPerImage} P$</span>}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {item.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Created By: {item.createdBy}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Points: {item.pointsPerImage}
          </Typography>
          {
            item.sampleImages?.map((img, i) => (
              <a href={img} target="_blank" key={i}>Image {i+1}, </a>
            ))
          }
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Upload your Image here:
          </Typography>
          <input
            id="upload-image"
            type="file"
          />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {gemError}
          </Typography>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={onSubmit}>Upload</Button>
        </Box>
      </Modal>
    </div>

    </>
  );
});

const Skeleton = ({img_link}) => (
  <img
    src={img_link}
    className="object-cover flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
  ></img>
);

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton img_link="demo1.png"/>,
    icon: <span>100 P$</span>,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton img_link="demo1.png"/>,
    icon: <span>100 P$</span>,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton img_link="demo1.png"/>,
    icon: <span>100 P$</span>,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton img_link="demo1.png"/>,
    icon: <span>100 P$</span>,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton img_link="demo1.png"/>,
    icon: <span>100 P$</span>,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton img_link="demo1.png"/>,
    icon: <span>100 P$</span>,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton img_link="demo1.png"/>,
    icon: <span>100 P$</span>,
  },
];

