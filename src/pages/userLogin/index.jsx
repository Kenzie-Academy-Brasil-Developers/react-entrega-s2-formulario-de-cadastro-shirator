import * as yup from "yup";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Header, Container, FormContainer } from "./style.js";
import { useHistory } from "react-router-dom";
import { creationError, creationSuccess } from "../../components/Toast";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";

const UserLogin = ({ setLoggedIn }) => {
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("You must use a valid email"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Minimum 8 characters, at least 1 (A-Z) upper case, one (a-z) lower case , 1 (1-9) number and 1 (%-#-@) special character "
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const navigate = useHistory();
  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        localStorage.setItem("@TOKEN", res.data.token);
        localStorage.setItem("@USERID", res.data.user.id);
        creationSuccess();
        setTimeout(function () {
          navigate.push("/homepage");
        }, 4000);
        setLoggedIn(true);
        return res.data;
      })
      .catch(() => {
        creationError();
      });
  };

  return (
    <Container>
      <Header>
        <img src={logo} alt="logo" />
      </Header>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
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
