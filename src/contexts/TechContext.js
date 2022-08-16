import { createContext } from "react";
import api from "../services/api";
import "react-toastify/dist/ReactToastify.css";
import { creationSuccess, creationError } from "../components/Toast";

export const TechContext = createContext({});
export const TechProvider = ({ children }) => {
  const createTech = (data) => {
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
      .catch((err) => creationError());
  };

  const updateTech = (data, id) => {
    api
      .put(`/users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        creationSuccess();
        return res.data;
      })

      .catch((err) => console.error(err));
  };

  const deleteTech = (id) => {
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
    <TechContext.Provider value={{ createTech, updateTech, deleteTech }}>
      {children}
    </TechContext.Provider>
  );
};
