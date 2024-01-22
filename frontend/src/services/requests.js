const userUrl = "http://localhost:3001/api/v1/user";
export async function loginUser(credentials) {
  try {
    const response = await fetch(userUrl + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log("Login successful!", data);

    return data;
  } catch (error) {
    console.error("Error during login:", error.message);
    throw error;
  }
}
