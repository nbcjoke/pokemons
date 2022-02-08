import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("No password provided")
    .min(7, "Password is too short - should be at least 7 characters")
    .matches(/[a-zA-z0-9]/, "Password must be with latin letters and digits"),
  passwordConfirm: yup
    .string()
    .required()
    .test("Passwords must match", function (value) {
      return this.parent.password === value;
    }),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phone: yup.number().required("phone is a required field"),
  gender: yup.string().required("gender is a required field"),
});
