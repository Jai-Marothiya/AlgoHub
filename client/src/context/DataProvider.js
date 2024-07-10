import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [problems, setProblems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <DataContext.Provider
      value={{
        account,
        setAccount,
        problems,
        setProblems,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
