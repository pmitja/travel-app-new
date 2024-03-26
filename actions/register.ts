"use server";

export const register = async (values: { email: string; password: string }): Promise<{ error?: string, success?: string } | null> => {
  const { email, password } = values;
  try {
    const res = await fetch(
      "https://travel-ai-api.onrender.com/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          name: 'Mitja'
        }),
      }
    );
    
    if (res && !res.ok) {
      if (res.status === 409) {
        return { error: "Email already in use!" };
      }
    }
  
    if (res && res.ok) {
      return { success: "Account successfully created!" };
    }
    
    throw new Error("Registration failed");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
