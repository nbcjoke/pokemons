import { useState } from "react";
import PropTypes from "prop-types";

import { TextField, Button, IconButton } from "@mui/material";
import { Key } from "@mui/icons-material";

const LoginForm = ({ formData, handleFormChange, handleSubmit, errors }) => {
  const [inputType, setInputType] = useState("password");

  const changeInputTypeHandler = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
        }}
      >
        <TextField
          error={errors?.email}
          label="email*"
          variant="outlined"
          type="email"
          value={formData.email}
          onChange={handleFormChange}
          helperText={(errors?.email || [])[0]}
          name="email"
        />
        <div style={{ position: "relative" }}>
          <TextField
            label="password"
            variant="outlined"
            type={inputType}
            value={formData.password}
            onChange={handleFormChange}
            name="password"
            error={errors?.password}
            helperText={(errors?.password || [])[0]}
          />
          <div style={{ position: "absolute", top: "9px", right: "5px" }}>
            <IconButton onClick={changeInputTypeHandler}>
              <Key color="primary" />
            </IconButton>
          </div>
        </div>
        <Button type="submit" variant="outlined">
          Login
        </Button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  formData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  handleFormChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
