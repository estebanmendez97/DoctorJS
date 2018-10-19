import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const LoginHeader = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Welcome to DoctorJS
      </Typography>
    </Toolbar>
  </AppBar>
);
export default LoginHeader;
