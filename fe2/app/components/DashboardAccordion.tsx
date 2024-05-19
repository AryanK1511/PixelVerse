import React, { useEffect } from 'react';
import {Accordion, AccordionItem, Avatar, Button, Link} from "@nextui-org/react";
import { getAllProjects } from "../../utils/lib/projects";
import { WithAuthInfoProps, withAuthInfo } from '@propelauth/react';

const DashboardAccordion = withAuthInfo((props: WithAuthInfoProps) => {
    const [projects, setProjects] = React.useState<any[]>([]);
    const [gemError, setGemError] = React.useState("");
    const [imageUrl, setImageUrl] = React.useState("");

    const onSubmit = async (project: any) => {
        const fileInput = document.getElementById("upload-image") as HTMLInputElement;
        if (!fileInput.files || fileInput.files.length === 0) {
            console.warn("No file was chosen.");
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
            console.log(data)
            if(data.url) {
                console.log("Image verification started");

                const res = await fetch("/api/gemini", {
                    method: "POST",
                    body: JSON.stringify({ urls: project.sampleImages, url: data.url, description: data.description}),
                });

                if (!res.ok) {
                    console.error("something went wrong, check your console.");
                    return;
                }
                
                // if the response if false, then the image is not valid
                const dataGemini: any = await res.json();
                if (dataGemini.response === "True") {
                    setImageUrl(data.url);
                    console.log("Image is valid");
                    //save the image to the database

                } else {
                    setGemError("Image is not valid - Gemini returned false.");
                    console.log("Image is not valid - Gemini returned false.");
                    setImageUrl(data.url);
                }

            } else {
                console.log("Image is not valid - Unknow error.");
                setGemError(data.error);
            }
        } catch (error) {
            console.error("something went wrong, check your console.");
        }
    };

    useEffect(() => {
        async function fetchData() {
        const response = await getAllProjects(props.user?.email!);    
        if (!response.success) {
        console.error("Error fetching data");
        } else {
        setProjects(response.data);
        }
        }
        fetchData();
    }, [])
    return (
    <>
    <h2 className='mb-4 text-3xl font-bold'>Open Projects:</h2>
    <Accordion selectionMode="multiple">
        {
            projects.map((project, i) => {
                return (
                <AccordionItem
                    key={i}
                    aria-label={project.name}
                    startContent={
                    <Avatar
                        isBordered
                        color="primary"
                        radius="lg"
                        src={project.sampleImages[0]}
                        size="lg"
                    />
                    }
                    subtitle={`Tokens Awarded: ${project.pointsPerImage}`}  
                    title={project.name}
                >
                    
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-1">
                            <span className='font-bold mt-2'>Owner: </span>
                            <span className='mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 to-purple-800'>{project.createdBy}</span>

                            <p className='font-bold mt-2'>Project Description:</p>
                            <p className='font-bold'>{project.description}</p>


                            <input
                                className='font-bold my-2'
                                id="upload-image"
                                type="file"
                            />
                            <span className='font-bold mx-2'>{gemError}</span>
                            <Button className="mb-2" onClick={()=>onSubmit(project)}>Upload</Button>
                        </div>
                        <div className="col-span-2">
                            <span className='font-bold mr-5'>Demo images provided:</span>
                            {
                                project.sampleImages.map((image:string, i:number) => {
                                    return (
                                        <Link
                                            key={i}
                                            href={image}
                                            target="_blank"
                                            underline="none"
                                            className='p-2 mt-4'
                                            >
                                            <Avatar
                                                isBordered
                                                color="secondary"
                                                radius="lg"
                                                src={image}
                                                size="md"
                                            />
                                        </Link>
                                        
                                    );
                                })
                            }
                        </div>
                    </div>
                  
                    

                </AccordionItem>
                );
            })
        }
    </Accordion>
    </>
    );
});

export default DashboardAccordion;