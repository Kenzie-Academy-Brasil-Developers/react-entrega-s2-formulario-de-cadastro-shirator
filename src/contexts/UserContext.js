import { createContext } from "react";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import api from "../services/api";
import { creationError, creationSuccess } from "../components/Toast";
import { useState, useEffect } from "react";

export const UserContext = createContext({});
export const UserProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState([]);
  const [tech, setTech] = useState([]);

  const registerFunction = (data) => {
    const {
      email,
      password,
      name,
      aboutMe: bio,
      contact,
      modules: course_module,
    } = data;

    const objData = {
      email: email,
      password: password,
      name: name,
      bio: bio,
      contact: contact,
      course_module: course_module,
    };
    api
      .post("/users", objData)
      .then((res) => {
        creationSuccess();
        setTimeout(function () {
          history.push("/");
        }, 4000);
        return res.data;
      })
      .catch(() => {
        creationError();
      });
  };

  const loginFunction = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("@TOKEN", res.data.token);
        localStorage.setItem("@USERID", res.data.user.id);
        creationSuccess();
        setTimeout(function () {
          history.push("/homepage");
        }, 4000);
        return res.data;
      })
      .catch(() => {
        creationError();
      });
  };

  useEffect(() => {
    if (localStorage.getItem("@TOKEN") !== null) {
      api
        .get("/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
          },
        })
        .then((res) => {
          setTech(res.data.techs);
          setUser(res.data);
        })
        .catch((err) => localStorage.clear());
    } else {
      history.push("/");
    }
  }, [tech, history, user]);
  return (
    <UserContext.Provider
      value={{ loginFunction, registerFunction, user, tech }}
    >
      {children}
    </UserContext.Provider>
  );
};
