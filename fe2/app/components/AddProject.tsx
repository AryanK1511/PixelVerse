import React from 'react';
import { WithAuthInfoProps, withAuthInfo } from '@propelauth/react';
import { Input, Button } from '@nextui-org/react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import { addProject } from '../utils/projects';

interface Project {
    createdBy: string;
    dateCreated: string;
    isOpen: boolean;
    maxImages: number;
    name: string;
    description: string;
    pointsPerImage: number;
    sampleImages: string[];
    totalCost: number;
    uploadedImages: string[];
}

const AddProject = withAuthInfo((props: WithAuthInfoProps) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [uploadError, setuploadError] = React.useState("");

    const handleOpen = () => {
        onOpen();
    }

    const submitProject = async () => {
        const fileInput = document.getElementById("upload-image") as HTMLInputElement;
        const name = (document.getElementById("project-name") as HTMLInputElement).value;
        const description = (document.getElementById("project-description") as HTMLInputElement).value;
        const numberOfImages = (document.getElementById("number-of-images") as HTMLInputElement).value;
        const tokensAwarded = (document.getElementById("tokens-awarded") as HTMLInputElement).value;
    

        if (!fileInput.files || fileInput.files.length === 0) {
            console.warn("No file was chosen.");
            return;
        }
        const file = fileInput.files[0];
        const formData = new FormData();
        
        //formData.append("name", name);
        //formData.append("description", description);
        //formData.append("numberOfImages", numberOfImages);
        //formData.append("tokensAwarded", tokensAwarded);
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

            if(data.url) {
                const project: Project = {
                    createdBy: props.user?.email!,
                    dateCreated: new Date().toISOString(),
                    isOpen: true,
                    maxImages: parseInt(numberOfImages),
                    name: name,
                    description: description,
                    pointsPerImage: parseInt(tokensAwarded),
                    sampleImages: data.url,
                    totalCost: parseInt(tokensAwarded) * parseInt(numberOfImages),
                    uploadedImages: [],
                }
                const resp = await addProject(project);
                if (!resp.success) {
                    setuploadError(resp.message!);
                } 

            } else {
                console.log("Image is not valid - Unknow error.");
                setuploadError(data.error);
            }
            setuploadError("");
            onClose();
            window.location.reload();
            return;
        } catch (error) {
            console.error("something went wrong, check your console.");
        }
    }

    return (
    <>
      <Button onPress={handleOpen} className='w-[100%] font-extrabold text-orange-600 bg-slate-100 text-4xl my-4'>+</Button>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Create A New Project</ModalHeader>
              <ModalBody>
              <Input
                isClearable
                isRequired
                autoFocus
                id="project-name"
                type="text"
                label="Project Name"
                variant="bordered"
                placeholder="Enter your project's name"
                defaultValue='test'
                onClear={() => console.log("input cleared")}
                className="max-w-xs"
                />
                <Input
                id="project-description"
                isClearable
                isRequired
                type="text"
                label="Project Description"
                defaultValue='cartoon'
                variant="bordered"
                placeholder="Enter your project's description"
                onClear={() => console.log("input cleared")}
                className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg"
                />
                <Input
                id="number-of-images"
                isClearable
                isRequired
                type="number"
                label="Number of Images Required"
                variant="bordered"
                placeholder="Enter the number of tokens awarded per image"
                defaultValue="1000"
                onClear={() => console.log("input cleared")}
                className="max-w-xs"
                />
                <Input
                id="tokens-awarded"
                isClearable
                isRequired
                type="number"
                label="Tokens Awarded Per Image"
                variant="bordered"
                placeholder="Enter the number of tokens awarded per image"
                defaultValue="100"
                onClear={() => console.log("input cleared")}
                className="max-w-xs"
                />
                <input
                    className='font-bold my-2 ml-1 rounded-sm'
                    id="upload-image"
                    type="file"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={submitProject}>
                  Submit
                </Button>
                {uploadError && <p className='text-red-600'>{uploadError}</p>}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
    );
});

export default AddProject;