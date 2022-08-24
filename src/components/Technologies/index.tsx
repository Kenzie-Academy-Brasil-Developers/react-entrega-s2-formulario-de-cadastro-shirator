import { Tech } from "./style";
import { BsTrash } from "react-icons/bs";
import { TechContext } from "../../contexts/TechContext";
import { useContext } from "react";
import { IElem } from "../../pages/Homepage";

const Technologies = ({ id, status, title }: IElem) => {
  const { deleteTech } = useContext(TechContext);

  return (
    <Tech>
      <p className="tech-title">{title}</p>
      <div>
        <p>{status}</p>
        <button onClick={() => deleteTech(id)}>
          <BsTrash />
        </button>
      </div>
    </Tech>
  );
};

export default Technologies;
