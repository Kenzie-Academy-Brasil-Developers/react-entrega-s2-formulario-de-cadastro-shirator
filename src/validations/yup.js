import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
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
      /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/,
      "Valid examples: +55 (11) 98888-8888 / 9999-9999 / 21 98888-8888 / 5511988888888"
    ),
});

export const loginFormSchema = yup.object().shape({
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

export const techFormSchema = yup.object().shape({
  title: yup.string().required("Please enter a technology"),
  status: yup
    .string()
    .required()
    .oneOf(["Iniciante", "Intermediário", "Avançado"], "Selecione um nível"),
});
