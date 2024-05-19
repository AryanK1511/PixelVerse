import React, { useEffect } from 'react';
import {Accordion, AccordionItem, Avatar, Button, Link} from "@nextui-org/react";
import { getUserProjects } from "../../utils/lib/projects";
import { WithAuthInfoProps, withAuthInfo } from '@propelauth/react';
import AddProject from './AddProject';
import { LineChart } from '@mui/x-charts/LineChart';
import { getPoints } from '../../utils/lib/projects';

const UserDashboardAccordion = withAuthInfo((props: WithAuthInfoProps) => {
    const [projects, setProjects] = React.useState<any[]>([]);
    const [tokens, setTokens] = React.useState<number>(0);

    useEffect(() => {
        getPoints(props.user?.email!).then((res) => {
            setTokens(res.data);
        });
        async function fetchData() {
          const response = await getUserProjects(props.user?.email!);    
          if (!response.success) {
            console.error("Error fetching data");
          } else {
            setProjects(response.data);
          }
        }
        fetchData();
      }, [props.user?.email])
    return (
    <>
        <h2 className='text-lg font-semibold mt-2'>Tokens Owned: {tokens}</h2>
        <LineChart
            xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
            series={[
                {
                data: [3, 5, 8, 3, 4, 1, 4, 7, 8, tokens/100],
                showMark: ({ index }) => index % 2 === 0,
                },
            ]}
            width={500}
            height={300}
            />
            
        <AddProject />
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
                            <p className='font-bold mt-2'>Project Description:</p>
                            <p className='font-bold'>{project.description}</p>

                            <Button className="mb-2">Edit Project</Button>
                        </div>
                        <div className="col-span-2">
                            <span className='font-bold mr-5'>All Images Submitted:</span>
                            <div className='overflow-auto h-28'>
                            {
                                project.uploadedImages.map((image:string, i:number) => {
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
                    </div>
                  
                    

                </AccordionItem>
                );
            })
        }
    </Accordion>
    </>
    );
});

export default UserDashboardAccordion;