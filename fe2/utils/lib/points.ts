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

// Function to increment the points of the project
const incrementPoints = async (email, points) => {
    const filter = JSON.stringify({
        email: {
          equals: email,
        },
      });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEURELO_API_URL}/rest/Users/__one?filter=${encodeURIComponent(filter)}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_API_KEY,
      },
      body: JSON.stringify({ points: points }),
    }
  );

  if (!response.ok) {
    return { success: false, message: "Error fetching data" };
  }

  const result = await response.json();

  return { success: true, data: result.data};
};

// Function to decrement the points of the project
const decrementPoints = async (email, points) => {
    const filter = JSON.stringify({
        email: {
          equals: email,
        },
      });
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEURELO_API_URL}/rest/Users/__one?filter=${encodeURIComponent(filter)}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_API_KEY,
      },
      body: JSON.stringify({ points: points }),
    }
  );

  if (!response.ok) {
    return { success: false, message: "Error fetching data" };
  }

    const result = await response.json();

  return { success: true, data: result.data};
};

export { getPoints, incrementPoints, decrementPoints };
