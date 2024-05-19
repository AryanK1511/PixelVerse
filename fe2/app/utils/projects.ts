import { Pragati_Narrow } from "next/font/google";

// Get all the projects on the website except for your own
const getAllProjects = async (email) => {
  const filter = JSON.stringify({
    createdBy: {
      not: email,
    },
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEURELO_API_URL}/rest/Datasets?filter=${encodeURIComponent(filter)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_API_KEY,
      },
    },
  );

  if (!response.ok) {
    return { success: false, message: "Error fetching data" };
  }

  const result = await response.json();
  console.log(result.data);

  return { success: true, data: result.data || [] };
};

// Get all the projects for the user
const getUserProjects = async (email) => {
  const filter = JSON.stringify({
    createdBy: {
      equals: email,
    },
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEURELO_API_URL}/rest/Datasets?filter=${encodeURIComponent(filter)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_API_KEY,
      },
    },
  );

  if (!response.ok) {
    return { success: false, message: "Error fetching data" };
  }

  const result = await response.json();

  return { success: true, data: result.data || [] };
};

// Add another image to the Dataset
const addImage = async (datasetId, imageUrl) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEURELO_API_URL}/rest/Datasets/${datasetId}/images`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_API_KEY,
      },
      body: JSON.stringify({ url: imageUrl }),
    },
  );

  if (!response.ok) {
    return { success: false, message: "Error adding image" };
  }

  const result = await response.json();

  return { success: true, data: result.data };
};

// Add a new project
const addProject = async (project) => {
  const existingProjectsResponse = await getAllProjects(project.createdBy);
  if (!existingProjectsResponse.success) {
    return { success: false, message: "Error checking existing projects" };
  }

  const existingProjects = existingProjectsResponse.data;
  const existingProject = existingProjects.find((p) => p.name === project.name);

  console.log("Existing project:", existingProject);

  // if (!existingProject) {
  //   return createProject(project);
  // }

  if (existingProject) {
    return updateProject(existingProject.id, project);
  } else {
    return createProject(project);
  }
};

const updateProject = async (projectId, project) => {
  const filter = JSON.stringify({
    createdBy: {
      equals: project.createdBy,
    },
  });
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEURELO_API_URL}/rest/Datasets?filter=${encodeURIComponent(filter)}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_API_KEY,
      },
      body: JSON.stringify({
        createdBy: project.createdBy,
        dateCreated: "2024-05-18T15:30:00.000Z",
        description: project.description,
        isOpen: true,
        maxImages: project.maxImages,
        name: project.name,
        pointsPerImage: project.pointsPerImage,
        sampleImages: project.sampleImages,
        totalCost: project.totalCost,
        uploadedImages: project.uploadedImages,
      }),
    },
  );

  if (!response.ok) {
    return { success: false, message: "Error updating project" };
  }

  const result = await response.json();

  console.log(result.data);

  return { success: true, data: result.data };
};

const createProject = async (project) => {
  console.log("The project:");
  console.log(project);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEURELO_API_URL}/rest/Datasets/__one`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_API_KEY,
      },
      body: JSON.stringify({
        createdBy: project.createdBy,
        dateCreated: project.dateCreated,
        description: project.description,
        isOpen: true,
        maxImages: project.maxImages,
        name: project.name,
        pointsPerImage: project.pointsPerImage,
        sampleImages: project.sampleImages,
        totalCost: project.totalCost,
        uploadedImages: project.uploadedImages,
      }),
    },
  );

  if (!response.ok) {
    console.log(response);
    return { success: false, message: "Error adding project" };
  }

  const result = await response.json();
  console.log(result);
  console.log(result.data);

  return { success: true, data: result.data };
};

export { getAllProjects, getUserProjects, addProject };
