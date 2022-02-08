import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .min(7)
    .matches(/[A-Za-z0-9 ]/, "Password must be with latin letters and digits"),
});
