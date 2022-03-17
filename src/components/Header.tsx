import React from "react";
import { Link } from "react-router-dom";
import { Box, AppBar, Typography, Toolbar, Button } from "@mui/material";

export const Header = () => {
  return (
    <Box sx={{ marginBottom: "90px" }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Header</Link>
          </Typography>
          <Link to="/login">
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
