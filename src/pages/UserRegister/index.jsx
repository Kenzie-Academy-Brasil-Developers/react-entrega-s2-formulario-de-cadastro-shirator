import { useContext } from "react";
import { FormContainer, Header, Container } from "./style";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { registerFormSchema } from "../../validations/yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../assets/Logo.svg";

const UserRegister = () => {
  const { registerFunction } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerFormSchema) });

  return (
    <Container>
      <Header>
        <img src={logo} alt="logo" />
        <Link to="/">
          <button> Voltar </button>
        </Link>
      </Header>
      <FormContainer>
        <div className="formHeader">
          <h3>Create your account</h3>
          <p>Fast and for free!</p>
        </div>
        <form onSubmit={handleSubmit(registerFunction)}>
          <label>
            Name
            <input
              type="text"
              placeholder="Type your name"
              {...register("name")}
            />
            <p>{errors.name && errors.name.message}</p>
          </label>
          <label>
            Email
            <input
              type="email"
              placeholder="Type your email"
              {...register("email")}
            />
            <p>{errors.email && errors.email.message}</p>
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="Type your password"
              {...register("password")}
            />
            <p>{errors.password && errors.password.message}</p>
          </label>
          <label>
            Confirm password
            <input
              type="password"
              placeholder="Retype your password"
              {...register("confirmPassword")}
            />
            <p>{errors.confirmPassword && errors.confirmPassword.message}</p>
          </label>
          <label>
            About me
            <input
              type="text"
              placeholder="Talk about yourself"
              {...register("aboutMe")}
            />
            <p>{errors.aboutMe && errors.aboutMe.message}</p>
          </label>
          <label>
            Contact
            <input
              type="text"
              placeholder="Options of contact"
              {...register("contact")}
            />
            <p>{errors.contact && errors.contact.message}</p>
          </label>
          <label>
            Select module
            <select id="module" {...register("modules")}>
              <option disabled selected>
                Selecione um módulo
              </option>
              <option>First module: HTML5, CSS3, Javascript</option>
              <option>Second module: DOM, POO</option>
              <option>Third Module: REACT</option>
            </select>
          </label>
          <button type="submit"> Create account </button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default UserRegister;
