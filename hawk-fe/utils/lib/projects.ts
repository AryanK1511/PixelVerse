// Get all the projects on the website except for your own
const getAllProjects = async (email) => {
  // Create a filter to see if project is not created by the user
  const filter = JSON.stringify({
    createdBy: {
      not: email,
    },
  }); 

  // Fetch the data from the Database Integration API with the filter parameter
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

  // Get the data from the response
  const result = await response.json();
  console.log(result.data); 

  return { success: true, data: result.data };
}

// Get all the projects for the user
const getUserProjects = async (email) => {
  // Create a filter to see if project is not created by the user
  const filter = JSON.stringify({
    createdBy: {
      equals: email,
    },
  }); 

  // Fetch the data from the Database Integration API with the filter parameter
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

  // Get the data from the response
  const result = await response.json();

  return { success: true, data: result.data };
}

export { getAllProjects, getUserProjects };