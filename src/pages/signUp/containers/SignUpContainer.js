import SignUpForm from "../components";
import { useForm } from "../../../hooks";
import { useDispatch } from "react-redux";
import { SIGN_UP_REQUEST } from "../actions";

export const SignUpContainer = () => {
  const dispatch = useDispatch();

  const { formValues, handleChange, handleReset } = useForm({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    gender: "",
  });

  const handleSignUp = (event) => {
    event.preventDefault();
    dispatch(SIGN_UP_REQUEST(formValues));
  };

  return (
    <SignUpForm
      formData={formValues}
      handleSubmit={handleSignUp}
      handleFormChange={handleChange}
    />
  );
};
