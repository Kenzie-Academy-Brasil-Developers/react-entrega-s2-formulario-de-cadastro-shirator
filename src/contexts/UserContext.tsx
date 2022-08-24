import { createContext, ReactNode, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";
import { creationError, creationSuccess } from "../components/Toast";
import "react-toastify/dist/ReactToastify.css";

interface IUserProvider {
  children: ReactNode;
}
interface IRegisterData {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}
interface ILoginData {
  email: string;
  password: string;
}
interface IUserData {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: Date;
  updated_at: Date;
  techs: string[];
  works: string[];
  avatar_url: string | null;
}

interface IElemProps {
  id: string;
  title: string;
  status: string;
}

type UserContextType = {
  registerFunction: (data: IRegisterData) => void;
  loginFunction: (data: IRegisterData) => void;
  user: IUserData;
  tech: IElemProps[];
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);
export const UserProvider = ({ children }: IUserProvider) => {
  const history = useHistory();
  const [user, setUser] = useState<IUserData>({} as IUserData);
  const [tech, setTech] = useState<IElemProps[]>([]);

  const registerFunction = (data: IRegisterData) => {
    api
      .post("/users", data)
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

  const loginFunction = (data: ILoginData) => {
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
        .catch(() => localStorage.clear());
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
