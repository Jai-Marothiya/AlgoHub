import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [adminView, setAdminView] = useState(false);
  const [problems, setProblems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [solved, setSolved] = useState([]);
  const [difficulty, setDifficulty] = useState([]);
  const [Platforms, setPlatforms] = useState([]);
  const [tags, setTags] = useState([]);

  return (
    <DataContext.Provider
      value={{
        account,
        setAccount,
        problems,
        setProblems,
        isAuthenticated,
        setIsAuthenticated,
        solved,
        setSolved,
        difficulty,
        setDifficulty,
        Platforms,
        setPlatforms,
        tags,
        setTags,
        adminView,
        setAdminView,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
