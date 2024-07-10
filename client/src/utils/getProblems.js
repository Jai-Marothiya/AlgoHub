import { endpoints } from "../constants/endpoints";

export const getProblems = async (token, setIsAuthenticated, setIsLoading) => {
  try {
    setIsLoading(true);
    const response = await fetch(endpoints.getProblems, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log("problems: ", data);
      setIsLoading(false); // Authentication check complete
      return data;
    }
  } catch (error) {
    console.error(error.message); // Authentication check complete
  }
};
