import * as yup from "yup";
import { useState, useEffect } from "react";

import { useForm } from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SIGN_UP_REQUEST } from "../actions";
import SignUpForm from "../components";
import { signUpSchema } from "../../../validations/SignUpValidation";
import { registerSelector } from "../../signUp/selectors";
import { ROUTE_NAMES } from "../../../routes/routeNames";
import { OPEN_MODAL } from "../../login/actions";

export const SignUpContainer = () => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState();
  const { success } = useSelector(registerSelector);
  console.log(success);

  const handleLogin = () => {
    dispatch(OPEN_MODAL());
  };

  const { formValues, handleChange } = useForm({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    gender: "",
    passwordConfirm: "",
  });

  const handleSignUp = async (event) => {
    console.log(event);
    event.preventDefault();
    let formData = {
      email: event.target[0].value,
      password: event.target[2].value,
      firstName: event.target[5].value,
      lastName: event.target[7].value,
      phone: event.target[9].value,
      gender: event.target[11].value,
      passwordConfirm: event.target[13].value,
    };
    const isValid = await signUpSchema.isValid(formData);
    setErrors({});
    await signUpSchema.validate(formData, { abortEarly: false }).catch((e) => {
      const validationErrors = e.inner.reduce((result, error) => {
        result[error.path] = [...(result[error.path] || []), error.message];
        return result;
      }, {});
      setErrors(validationErrors);
      console.log(formData);
    });
    if (isValid) {
      dispatch(SIGN_UP_REQUEST(formValues));
    }
  };

  const { isRegister } = useSelector(registerSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (isRegister) {
      navigate(ROUTE_NAMES.LOGIN);
    }
  }, [isRegister]);

  return (
    <SignUpForm
      formData={formValues}
      handleSubmit={handleSignUp}
      handleFormChange={handleChange}
      errors={errors}
      handleLogin={handleLogin}
      success={success}
    />
  );
};
