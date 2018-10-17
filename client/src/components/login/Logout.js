import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

const Logout = props => (
  <div>
    <MuiThemeProvider>
      <center>
        <RaisedButton
          label="Logout"
          primary={true}
          onClick={props.logout}
          style={style}
        />
      </center>
    </MuiThemeProvider>
  </div>
);
const style = {
  margin: 15
};
export default Logout;
