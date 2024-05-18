"use client";
import { CardProps, ImageCard } from "@/components/ImageCard";
import { Navbar } from "@/components/Navbar";
import { Background } from "@/components/Background";
import ImageCards from "@/components/ImageCards";
import CustButton from "@/components/Button";
import { AuthProvider } from "@propelauth/react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from "react";

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

export default function Projects() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  const onSubmit = async () => {
    const name = document.getElementById("name") as HTMLInputElement;
    const description = document.getElementById("description") as HTMLTextAreaElement;
    const points = document.getElementById("points") as HTMLInputElement;
    const fileInput = document.getElementById("upload-image") as HTMLInputElement;

    if (!fileInput.files || fileInput.files.length === 0 ||
      !name || !description || !points) {
      console.warn("missing required fields");
      return;
    }
    
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);
    
    // THE REQUEST

    handleClose();
  }
  
  return (
    <AuthProvider authUrl={process.env.NEXT_PUBLIC_AUTH_URL!}>
      <Background className="w-screen h-full min-h-screen">
        <Navbar />
        <ImageCards
          className="grid grid-cols-3 gap-x-16 gap-y-20 pt-20"
        />
      </Background>
      <div className="flex ">
      <CustButton text="+" className=" my-10 mx-auto" onClick={handleOpen} />
      </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a new project:
          </Typography>
          
          <input
          className="mt-2"
            id="name"
            type="text"
            placeholder="Enter your project's name"
            required
          />

          <textarea
          className="mt-2"
            id="description"
            rows={4}
            placeholder="Enter your event's description"
            required
          />

          <p className="mt-1">Upload a demo image:</p>
          <input
            id="upload-image"
            type="file"
            required
          />

          <input
          className="mt-2"
            id="points"
            type="number"
            placeholder="Enter the points for each submission"
            required
          />
        
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={onSubmit}>Create</Button>
        </Box>
      </Modal>
    </AuthProvider>
  );
}
