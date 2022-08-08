import * as yup from "yup";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContainer, Header, Container } from "./style";
import { useHistory } from "react-router-dom";
import { creationError, creationSuccess } from "../../components/Toast";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import "./toast.css";

const UserRegister = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
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
    confirmPassword: yup
      .string()
      .required("Confimation password is required")
      .oneOf([yup.ref("password")], "Passwords doesn't match"),
    aboutMe: yup.string().required("About me is required"),
    contact: yup
      .string()
      .required("Contact is required")
      .matches(
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
        "Valid examples: +55 (11) 98888-8888 / 9999-9999 / 21 98888-8888 / 5511988888888"
      ),
  });
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data) => {
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
  // Y33b^0*WnW8A
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
        <form onSubmit={handleSubmit(onSubmitFunction)}>
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
