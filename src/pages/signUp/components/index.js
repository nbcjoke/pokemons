import PropTypes from "prop-types";

import {
  TextField,
  FormControlLabel,
  Radio,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
} from "@mui/material";

const SignUpForm = ({ formData, handleFormChange, handleSubmit, errors }) => {
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        marginTop: 200,
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
      <TextField
        required
        label="firstName"
        variant="outlined"
        type="text"
        value={formData.firstName}
        onChange={handleFormChange}
        name="firstName"
      />
      <TextField
        required
        label="lastName"
        variant="outlined"
        type="text"
        value={formData.lastName}
        onChange={handleFormChange}
        name="lastName"
      />
      <TextField
        required
        label="phone"
        variant="outlined"
        type="text"
        value={formData.phone}
        onChange={handleFormChange}
        name="phone"
      />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Female"
            checked={formData.gender === "female"}
            onChange={handleFormChange}
            name="gender"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Male"
            checked={formData.gender === "male"}
            onChange={handleFormChange}
            name="gender"
          />
        </RadioGroup>
      </FormControl>
      <Button type="submit" variant="outlined">
        Sign Up
      </Button>

      {errors && <p>{errors}</p>}
    </form>
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
