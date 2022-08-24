import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Header, Container, FormContainer } from "./style.js";
import { Link } from "react-router-dom";
import { loginFormSchema } from "../../validations/yup";
import { useContext } from "react";
import logo from "../../assets/Logo.svg";
import { UserContext } from "../../contexts/UserContext";

interface IFormData {
  email: string;
  password: string;
}

const UserLogin = () => {
  const { loginFunction } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(loginFormSchema) });

  return (
    <Container>
      <Header>
        <img src={logo} alt="logo" />
      </Header>
      <FormContainer>
        <form onSubmit={handleSubmit(loginFunction as any)}>
          <h3>Login</h3>
          <label>
            Email
            <input
              type="text"
              placeholder="Type your email"
              {...register("email")}
            />
          </label>
          <p>{errors.email && errors.email.message}</p>
          <label>
            Password
            <input
              type="password"
              placeholder="Type your password"
              {...register("password")}
            />
          </label>
          <p>{errors.password && errors.password.message}</p>
          <button type="submit"> Login </button>
        </form>
        <small>Need an account?</small>
        <Link to="/register">
          <button id="btn"> Register here </button>
        </Link>
      </FormContainer>
    </Container>
  );
};

export default UserLogin;
