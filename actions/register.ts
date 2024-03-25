"use server";

export const register = async (values: { email: string; password: string }): Promise<any | null> => {
  try {
    const res = await fetch(
      "https://travel-ai-api.onrender.com/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    
    console.log(res.status, 'register');
    
    if (res.status === 400) {
      return null;
    }

    const user = await res.json();
    console.log(user);
    
    if (res.ok && user) {
      return user;
    }
    
    throw new Error("Registration failed");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
