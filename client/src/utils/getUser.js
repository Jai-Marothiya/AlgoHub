import { endpoints } from "../constants/endpoints";

export const getUsers = async (
  token,
  setIsLoading,
  setIsAuthenticated,
  setAccount
) => {
  try {
    const response = await fetch(endpoints.getUser, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      // Handle the user data here
      setIsAuthenticated(true);
      setIsLoading(false); // Authentication check complete
      setAccount(data);
      return data;
    } else {
      setIsAuthenticated(false);
    }
  } catch (error) {
    setIsAuthenticated(false);
  }
};
