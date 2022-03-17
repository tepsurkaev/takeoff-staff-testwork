import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, AppBar, Typography, Toolbar, Button } from "@mui/material";
import { AddContact } from "./AddContact";

export const Header = () => {
  const [newContact, setNewContact] = useState<boolean>(false);

  const { pathname } = useLocation();

  return (
    <>
      <Box sx={{ marginBottom: "90px" }}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Header</Link>
            </Typography>
            {pathname === "/" && (
              <Button
                onClick={() => setNewContact(!newContact)}
                color="inherit"
              >
                Add contact
              </Button>
            )}
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      {newContact && <AddContact />}
    </>
  );
};
