import Technologies from "../../components/Technologies";
import CreateNew from "../../components/Modal/CreateNew";
import logo from "../../assets/Logo.svg";
import { useState, useContext } from "react";
import { HomepageContainer } from "./style.js";
import { UserContext } from "../../contexts/UserContext";
import { BsPlusLg } from "react-icons/bs";

export interface IElem {
  id: string;
  title: string;
  status: string;
}

const Homepage = () => {
  const { user, tech } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <HomepageContainer>
      <CreateNew show={showModal} onClose={() => setShowModal(false)} />
      <header>
        <img src={logo} alt="logo" />
        <button
          onClick={() => {
            localStorage.clear();
          }}
        >
          Sair
        </button>
      </header>
      <div className="user-data">
        <h3>Olá, {user.name}</h3>
        <p>{user.course_module}</p>
      </div>
      <div>
        <h3>Tecnologias</h3>
        <button onClick={() => setShowModal(true)}>
          <BsPlusLg />
        </button>
      </div>
      <div className="techs">
        {tech.map((elem: IElem) => {
          return (
            <Technologies
              id={elem.id}
              title={elem.title}
              status={elem.status}
              key={elem.id}
            />
          );
        })}
      </div>
    </HomepageContainer>
  );
};

export default Homepage;
