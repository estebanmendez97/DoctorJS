import React, { Component } from "react";
import PropTypes from "prop-types";
//import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class Navigation extends Component {
  render() {
    return (
      <Paper>
        <Tabs indicatorColor="primary" textColor="primary" centered>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Paper>
    );
  }
}
export default Navigation;
//
// const styles = {
//   root: {
//     flexGrow: 1
//   }
// };
Navigation.propTypes = {
  classes: PropTypes.object.isRequired
};
