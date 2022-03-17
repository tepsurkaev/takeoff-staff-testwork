import React from "react";
import { Stack, TextField, Typography, Button } from "@mui/material";

export const LoginPage = () => {
  return (
    <Stack
      component="form"
      sx={{
        width: "400px",
        margin: "0 auto",
      }}
      spacing={3}
      noValidate
      autoComplete="off"
      color="primary"
    >
      <Typography variant="h5" color="primary" sx={{ textAlign: "center" }}>
        Авторизация
      </Typography>
      <TextField size="small" label="Email" />
      <TextField size="small" label="Password" />
      <Button variant="contained">Войти</Button>
    </Stack>
  );
};
