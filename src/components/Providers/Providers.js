import { createContext, useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";

export const ProvidersContext = createContext({});

export const ProvidersProvider = ({ children }) => {
  const userContext = useContext(UserContext);
  const techContext = useContext(TechContext);
  const { user, tech } = useContext(UserContext);

  return (
    <ProvidersContext.Provider value={{ userContext, techContext, user, tech }}>
      {children}
    </ProvidersContext.Provider>
  );
};
