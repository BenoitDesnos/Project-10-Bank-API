import { getToken } from "../utils/tokenStorage";

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

export const userProfile = async () => {
  try {
    const response = await fetch(`${userUrl}/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Couldn't retrieve profile", error.message);
    throw error;
  }
};

export const userModifyName = async (params) => {
  try {
    const response = await fetch(`${userUrl}/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during modify name:", error.message);
    throw error;
  }
};