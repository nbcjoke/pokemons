import { useState, useEffect } from "react";
import * as yup from "yup";

import { useForm } from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SIGN_IN_REQUEST } from "../actions";
import LoginForm from "../components/LoginForm";
import { loginSchema } from "../../../validations/LoginValidation";
import { ROUTE_NAMES } from "../../../routes/routeNames";
import { authSelector } from "../selectors";

export const LoginContainer = () => {
  const dispatch = useDispatch();

  const { formValues, handleChange } = useForm({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState();

  const handleLogin = async (event) => {
    event.preventDefault();
    let formData = {
      email: event.target[0].value,
      password: event.target[2].value,
    };
    const isValid = await loginSchema.isValid(formData);
    await loginSchema.validate(formData, { abortEarly: false }).catch((e) => {
      const validationErrors = e.inner.reduce((result, error) => {
        result[error.path] = [...(result[error.path] || []), error.message];
        return result;
      }, {});
      setErrors(validationErrors);
    });
    if (isValid) {
      dispatch(SIGN_IN_REQUEST(formValues));
    }
  };

  const { isAuth } = useSelector(authSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate(ROUTE_NAMES.POKEMONS);
    }
  }, [isAuth]);

  return (
    <LoginForm
      formData={formValues}
      errors={errors}
      handleSubmit={handleLogin}
      handleFormChange={handleChange}
    />
  );
};
