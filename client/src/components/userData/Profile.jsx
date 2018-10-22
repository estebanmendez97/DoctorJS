import React, { Component } from "react";
import axios from "axios";
//import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ProfileList from "./ProfileList.jsx";
import UserAvatar from "./userAvatar";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: []
    };
  }
  componentDidMount() {
    axios
      .get("/userData")
      .then(res => this.setState({ profile: res.data }))
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <Paper style={styles.Paper}>
        <div>
          <UserAvatar />
          <ProfileList profileList={this.state.profile} />
        </div>
      </Paper>
    );
  }
}

const styles = {
  Paper: {
    margin: 25,
    padding: 20,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center"
  },
  root: {
    flexGrow: 1
  }
};
export default withStyles(styles)(Profile);
