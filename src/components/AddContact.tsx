import React from "react";
import { Box, TextField } from "@mui/material";

export const AddContact = () => {
  return (
    <Box
      sx={{
        padding: 2,
        margin: "20px",
        border: "1px solid #1976d2",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <TextField size="small" label="First name" />
      <TextField size="small" label="last name" />
      <TextField size="small" label="Email" />
      <TextField size="small" label="Phone" />
    </Box>
  );
};
