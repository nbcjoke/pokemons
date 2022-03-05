import { useState, useEffect } from "react";

import { useForm } from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SIGN_IN_REQUEST, OPEN_MODAL, CLOSE_MODAL } from "../actions";
import LoginForm from "../components/LoginForm";
import { loginSchema } from "../../../validations/LoginValidation";
import { ROUTE_NAMES } from "../../../routes/routeNames";
import { authSelector } from "../selectors";

import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";

export const LoginContainer = () => {
  const dispatch = useDispatch();

  const { formValues, handleChange } = useForm({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState();

  const handleClickOpen = () => {
    dispatch(OPEN_MODAL());
  };

  const handleClose = () => {
    dispatch(CLOSE_MODAL());
  };

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

  const { isAuth, isOpened, userData } = useSelector(authSelector);
  const navigate = useNavigate();
  console.log(userData);

  useEffect(() => {
    if (isAuth) {
      navigate(ROUTE_NAMES.POKEMONS);
    }
  }, [isAuth]);

  return (
    <>
      <Button key="Log In" variant="outlined" onClick={handleClickOpen}>
        Log In
      </Button>
      <Dialog open={isOpened} onClose={handleClose}>
        <DialogTitle>Log In</DialogTitle>
        <DialogContent style={{ padding: "20px 40px" }}>
          <LoginForm
            formData={formValues}
            errors={errors}
            handleSubmit={handleLogin}
            handleFormChange={handleChange}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
