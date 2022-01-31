import PropTypes from "prop-types";

import { TextField, Button } from "@material-ui/core";

const LoginForm = ({ formData, handleFormChange, handleSubmit, errors }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "200px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <TextField
          required
          label="email"
          variant="outlined"
          type="email"
          value={formData.email}
          onChange={handleFormChange}
          name="email"
        />
        <TextField
          required
          label="password"
          variant="outlined"
          type="password"
          value={formData.password}
          onChange={handleFormChange}
          name="password"
        />
        <Button type="submit" variant="outlined">
          Login
        </Button>

        {errors && <p>{errors}</p>}
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
