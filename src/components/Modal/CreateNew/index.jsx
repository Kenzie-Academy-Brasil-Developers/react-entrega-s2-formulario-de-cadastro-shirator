import { BsPlusLg } from "react-icons/bs";
import { Modal } from "./style";
import { techFormSchema } from "../../../validations/yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";

const CreateNew = (props) => {
  const { createTech } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(techFormSchema) });

  if (!props.show) {
    return null;
  }

  return (
    <Modal>
      <div className="cabecalho" onClick={(e) => e.stopPropagation()}>
        <h4>Cadastrar Tecnologia</h4>
        <button onClick={props.onClose}>
          <BsPlusLg />
        </button>
      </div>
      <div>
        <form onSubmit={handleSubmit(createTech)}>
          <label>
            Nome
            <input
              type="text"
              placeholder="Typescript"
              {...register("title")}
            />
            <p>{errors.title && errors.title.message}</p>
          </label>
          <label>
            Selecionar status
            <select {...register("status")}>
              <option disabled selected>
                Selecione um nível
              </option>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
            <p>{errors.status && errors.status.message}</p>
          </label>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </Modal>
  );
};

export default CreateNew;
