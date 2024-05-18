// Functions to handle user auth and database storage

// ===== USER AUTH =====
const userAuth = async () => {
    // Fetch data from the Database Integration API 
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEURELO_API_URL}/rest/Users`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_API_KEY
            }
        }
    );

    if (!response.ok) {
        return {"success": false, "message": "Error fetching data"};
    }

    const result = await response.json();
    console.log(result.data);

    return {"success": true, "data": result.data};
}

export { userAuth };