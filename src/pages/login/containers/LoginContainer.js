import LoginForm from "../components/LoginForm";
import { useForm } from "../../../hooks";
import { useDispatch } from "react-redux";
import { SIGN_IN_REQUEST } from "../actions";
import { useCallback } from "react";

export const LoginContainer = () => {
    const dispatch = useDispatch();
    
    const { formValues, handleChange, handleReset } = useForm({email: '', password: ''});

    const handleLogin = (event) => {
        event.preventDefault();
        dispatch(SIGN_IN_REQUEST(formValues));
    };

    return <LoginForm formData={formValues} handleSubmit={handleLogin} handleFormChange={handleChange} />;
};