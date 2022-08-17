import { Tech } from "./style";
import { BsTrash } from "react-icons/bs";
import { TechContext } from "../../contexts/TechContext";
import { useContext } from "react";

const Technologies = ({ elem }) => {
  const { deleteTech } = useContext(TechContext);

  return (
    <Tech>
      <p className="tech-title">{elem.title}</p>
      <div>
        <p>{elem.status}</p>
        <button onClick={() => deleteTech(elem.id)}>
          <BsTrash />
        </button>
      </div>
    </Tech>
  );
};

export default Technologies;
