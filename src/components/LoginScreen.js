import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../actions";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useFormik } from "formik";

const LoginScreen = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  useEffect(() => {
    handleRedirect();
  }, []);

  const handleRedirect = () => {
    const params = new URLSearchParams(location.search);
    const initialUsername = params.get("initialUsername");
    const initialPassword = params.get("initialPassword");
    if (initialUsername && initialPassword) {
      localStorage.setItem("username", initialUsername);
      localStorage.setItem("password", initialPassword);
      history.push("/home");
    }
  };

  const defaultUsername = "admin";
  const defaultPassword = "admin";

  const initialValues = {
    username: "admin",
    password: "admin",
  };

  const handleLogin = (values) => {
    const storedUsername = localStorage.getItem("username") || "admin";
    const storedPassword = localStorage.getItem("password") || "admin";
    if (
      values.username === storedUsername &&
      values.password === storedPassword
    ) {
      localStorage.setItem("isLoggedIn", "true");
      dispatch(setLoggedIn(true));
      history.push("/home");
    } else {
      dispatch(setLoggedIn(false));
      setError("Invalid username or password");
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleLogin,
  });

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h4">Login</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Username"
          variant="outlined"
          value={formik.values.username || defaultUsername}
          onChange={formik.handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          value={formik.values.password || defaultPassword}
          onChange={formik.handleChange}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          mt={2}
        >
          Login
        </Button>
      </form>
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};

export default LoginScreen;
