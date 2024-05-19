// Get all the projects on the website except for your own
const getAllProjects = async (email) => {
  const filter = JSON.stringify({
    createdBy: {
      not: email,
    },
  });

  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_NEURELO_API_URL
    }/rest/Datasets?filter=${encodeURIComponent(filter)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_API_KEY,
      },
    }
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
    `${
      process.env.NEXT_PUBLIC_NEURELO_API_URL
    }/rest/Datasets?filter=${encodeURIComponent(filter)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_API_KEY,
      },
    }
  );

  if (!response.ok) {
    return { success: false, message: "Error fetching data" };
  }

  const result = await response.json();

  return { success: true, data: result.data || [] };
};

// Add a new project
const addProject = async (project) => {
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
    }
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

const updateProject = async (projectId, project) => {
  console.log("The project UPDATE:", project);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEURELO_API_URL}/rest/Datasets/${projectId}`,
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
    }
  );

  if (!response.ok) {
    return { success: false, message: "Error updating project" };
  }

  const result = await response.json();

  console.log(result.data);

  return { success: true, data: result.data };
};


// Function to return the points of the project
const getPoints = async (email) => {
  const filter = JSON.stringify({
    email: {
      equals: email,
    },
  });

  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_NEURELO_API_URL
    }/rest/Users?filter=${encodeURIComponent(filter)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_API_KEY,
      },
    }
  );

  if (!response.ok) {
    return { success: false, message: "Error fetching data" };
  }

  const result = await response.json();

  return { success: true, data: result.data[0].points };
};

export { getAllProjects, getUserProjects, addProject, getPoints, updateProject };
