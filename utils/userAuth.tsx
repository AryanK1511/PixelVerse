// Function to authenticate the user and store in the database
const storeUserDetailsAfterAuthentication = async (email: string) => {
    // Create the filter parameter
  const filter = JSON.stringify({
    email: {
      equals: email,
    },
  });

  // Fetch data from the Database Integration API with filter parameter
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEURELO_API_URL}/rest/Users?filter=${encodeURIComponent(filter)}`,
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

  // Check if the user already existed
  if (result.data.length === 0) {
    // If the user does not exist, create a new user
    const createUserResponse = await fetch(
      `${process.env.NEXT_PUBLIC_NEURELO_API_URL}/rest/Users/__one`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_API_KEY,
        },
        body: JSON.stringify({
          email: email,
          points: "0"
        }),
      },
    );

    if (!createUserResponse.ok) {
      return { success: false, message: "Error creating user" };
    }

    // Get the data from the response
    const createUserResult = await createUserResponse.json();

    return { success: true, data: createUserResult.data };
  }

  // Return the existing user data if the user already exists
  return { success: true, data: result.data[0] };
};

  // add points to a user
  const addPointsToUser = async (email: string, points: number) => {
    
    // Create the filter parameter
    const filter = JSON.stringify({
      email: {
        equals: email,
      },
    });

    // Fetch data from the Database Integration API with filter parameter
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEURELO_API_URL}/rest/Users?filter=${encodeURIComponent(filter)}`,
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

    // Check if the user already existed
    if (result.data.length === 0) {
      // create the instance with the points
      const createUserResponse = await fetch(
        `${process.env.NEXT_PUBLIC_NEURELO_API_URL}/rest/Users/__one`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_API_KEY,
          },
          body: JSON.stringify({
            email: email,
            points: points.toString()
          }),
        },
      );
    } else {
      // add to the user points
      const userData = result.data[0];
      const updatePointsResponse = await fetch(
        `${process.env.NEXT_PUBLIC_NEURELO_API_URL}/rest/Users/${userData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_API_KEY,
          },
          body: JSON.stringify({
            points: (parseInt(userData.points) + points).toString(),
          }),
        },
      );
    }

    // Get the user data
    const userData = result.data[0];

    // Update the points
    const updatePointsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_NEURELO_API_URL}/rest/Users/${userData.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_API_KEY,
        },
        body: JSON.stringify({
          points: (parseInt(userData.points) + points).toString(),
        }),
      },
    );

    if (!updatePointsResponse.ok) {
      return { success: false, message: "Error updating points" };
    }

    // Get the data from the response
    const updatePointsResult = await updatePointsResponse.json();

    return { success: true, data: updatePointsResult.data };
  };


// remove points from a user
const removePointsFromUser = async (email: string, points: number) => {
    
    // Create the filter parameter
    const filter = JSON.stringify({
      email: {
        equals: email,
      },
    });

    // Fetch data from the Database Integration API with filter parameter
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEURELO_API_URL}/rest/Users?filter=${encodeURIComponent(filter)}`,
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

    // Check if the user already existed
    if (result.data.length === 0) {
      console.log("User does not exist")
    } else {
      // remove from the user points
      const userData = result.data[0];
      const updatePointsResponse = await fetch(
        `${process.env.NEXT_PUBLIC_NEURELO_API_URL}/rest/Users/${userData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_API_KEY,
          },
          body: JSON.stringify({
            points: (parseInt(userData.points) - points).toString(),
          }),
        },
      );
      
      if (!updatePointsResponse.ok) {
        return { success: false, message: "Error updating points" };
      }
    }
}
      
    // Get the data from the response


// Remove the function definitions from this file

export { addPointsToUser , removePointsFromUser, storeUserDetailsAfterAuthentication};
