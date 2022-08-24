import { createContext, ReactNode } from "react";
import { creationSuccess, creationError } from "../components/Toast";
import api from "../services/api";
import "react-toastify/dist/ReactToastify.css";

interface ITechProvider {
  children: ReactNode;
}
interface IData {
  title: string;
  status: string;
}
type TechContextType = {
  createTech: (data: IData) => void;
  deleteTech: (id: string) => void;
};

export const TechContext = createContext<TechContextType>(
  {} as TechContextType
);
export const TechProvider = ({ children }: ITechProvider) => {
  const createTech = (data: IData) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        creationSuccess();
        return res.data;
      })
      .catch(() => creationError());
  };

  const deleteTech = (id: string) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.error(err));
  };

  return (
    <TechContext.Provider value={{ createTech, deleteTech }}>
      {children}
    </TechContext.Provider>
  );
};
