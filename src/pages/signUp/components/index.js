import PropTypes from "prop-types";
import { useState } from "react";

import { ROUTE_NAMES } from "../../../routes/routeNames";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {
  TextField,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Key } from "@mui/icons-material";
import { ToastSnackbar } from "../../../components/toast";
import "./style.css";

const SignUpForm = ({
  formData,
  handleFormChange,
  handleSubmit,
  errors,
  success,
}) => {
  const [inputType, setInputType] = useState("password");

  const changeInputTypeHandler = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <div className="signUpWrapper">
      <Typography variant="h5" component="h2">
        Sign up
      </Typography>
      <p className="account">
        Already have an account?{" "}
        <a className="LogInLink" href={ROUTE_NAMES.LOGIN}>
          Log in
        </a>
        {/* <NavLink to={ROUTE_NAMES.LOGIN}>Log in</NavLink> */}
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={formData.email}
          onChange={handleFormChange}
          name="email"
          error={errors?.email}
          helperText={(errors?.email || [])[0]}
        />
        <div style={{ position: "relative" }}>
          <TextField
            label="Password"
            variant="outlined"
            type={inputType}
            value={formData.password}
            onChange={handleFormChange}
            name="password"
            error={errors?.password}
            helperText={(errors?.password || [])[0]}
          />
          <div style={{ position: "absolute", top: "5px", right: "5px" }}>
            <IconButton onClick={changeInputTypeHandler}>
              <Key color="primary" />
            </IconButton>
          </div>
        </div>
        <TextField
          label="First name"
          variant="outlined"
          type="text"
          value={formData.firstName}
          onChange={handleFormChange}
          name="firstName"
          error={errors?.firstName}
          helperText={(errors?.firstName || [])[0]}
        />
        <TextField
          label="Last name"
          variant="outlined"
          type="text"
          value={formData.lastName}
          onChange={handleFormChange}
          name="lastName"
          error={errors?.lastName}
          helperText={(errors?.lastName || [])[0]}
        />
        <TextField
          label="Phone"
          variant="outlined"
          type="text"
          value={formData.phone}
          onChange={handleFormChange}
          name="phone"
          error={errors?.phone}
          helperText={(errors?.phone || [])[0]}
        />
        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Gender</InputLabel>
          <Select
            value={formData.gender}
            label="Gender"
            onChange={handleFormChange}
            name="gender"
            error={errors?.gender}
            helperText={(errors?.gender || [])[0]}
          >
            <MenuItem value="female">female</MenuItem>
            <MenuItem value="male">male</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Confirm password"
          variant="outlined"
          type="password"
          value={formData.passwordConfirm}
          onChange={handleFormChange}
          name="passwordConfirm"
          error={formData.passwordConfirm !== formData.password}
        />
        <Button className="signUpButton" type="submit" variant="outlined">
          Sign Up
        </Button>
      </form>
      {/* {success ? <ToastSnackbar /> : <div>hello</div>} */}
    </div>
  );
};

SignUpForm.propTypes = {
  formData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  }).isRequired,
  handleFormChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
