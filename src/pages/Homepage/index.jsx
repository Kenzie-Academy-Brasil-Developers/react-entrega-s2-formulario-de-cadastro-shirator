import { HomepageContainer } from "./style.js";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api.js";
import logo from "../../assets/Logo.svg";

const Homepage = () => {
  const navigate = useHistory();
  const [data, setData] = useState([]);
  useEffect(() => {
    api
      .get(`/users/${localStorage.getItem("@USERID")}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <HomepageContainer>
      <header>
        <img src={logo} alt="logo" />
        <button
          onClick={() => {
            localStorage.removeItem("@TOKEN");
            localStorage.removeItem("@USERID");
            navigate.push("/");
          }}
        >
          Sair
        </button>
      </header>
      <div>
        <h3>Olá, {data.name}</h3>
        <p>{data.course_module}</p>
      </div>
      <main>
        <h3>Que pena! Estamos em desenvolvimento :(</h3>
        <h3>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </h3>
      </main>
    </HomepageContainer>
  );
};

export default Homepage;
