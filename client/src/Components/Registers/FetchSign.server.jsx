const BASE_SERVER_URL = import.meta.env.VITE_BASE_SERVER_URL;

const FetchSignIn = async (formData) => {
  try {
    const response = await fetch(`${BASE_SERVER_URL}/api/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

async function FetchSignUp(formData) {
  try {
    const response = await fetch(`${BASE_SERVER_URL}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert(errorData.message || "An error occurred during registration.");
    }

    return response.json();
  } catch (error) {
    alert(error.message || "An error occurred during registration.");
  }
}

export { FetchSignIn, FetchSignUp };
