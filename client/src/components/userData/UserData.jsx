import React, { Component, Fragment } from "react";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Profile from "./Profile.jsx";

import $ from "jquery";

class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
      age: 0,
      weight: 0,
      height: 0
    };
    this.handleAge = this.handleAge.bind(this);
    this.handleWeight = this.handleWeight.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleHeight = this.handleHeight.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  handleGender(e) {
    e.preventDefault();
    console.log("This is the EVENT", e.target.value);
    this.setState({
      gender: e.target.value
    });
  }

  handleAge(e) {
    e.preventDefault();
    this.setState({
      age: e.target.value
    });
  }

  handleWeight(e) {
    e.preventDefault();
    this.setState({
      weight: e.target.value
    });
  }

  handleHeight(e) {
    e.preventDefault();
    this.setState({
      height: e.target.value
    });
  }
  //somewhere here is gonna send the token (ajax jwt post)
  addData(gender, age, weight, height) {
    $.ajax({
      url: "/userData",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        gender: gender,
        age: age,
        weight: weight,
        height: height
      }),
      sucess: data => {
        console.log(data);
      },
      error: (xhr, status, error) => {
        console.log("FUNCTION ERROR", error);
      }
    });
  }
  submitData(event) {
    event.preventDefault();
    this.addData(
      this.state.gender,
      this.state.age,
      this.state.weight,
      this.state.height
    );
    this.setState({
      gender: "",
      age: 0,
      weight: 0,
      height: 0
    });
  }
  render() {
    return (
      <div className={styles.root}>
        <Fragment>
          <Paper style={styles.Paper}>
            <Typography variant="title" gutterBottom align="center">
              User Profile
            </Typography>
            <select value={this.gender} onChange={this.handleGender}>
              <option>Choose your Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <br />
            <Typography variant="subtitle1" gutterBottom align="center">
              Your Age
            </Typography>
            <input value={this.age} onChange={this.handleAge} />
            <br />
            <Typography variant="subtitle1" gutterBottom align="center">
              Your Weight
            </Typography>
            <input value={this.weight} onChange={this.handleWeight} />
            <br />
            <Typography
              component="h6"
              variant="subtitle1"
              gutterBottom
              align="center"
            >
              Your Height
            </Typography>
            <input value={this.height} onChange={this.handleHeight} />
            <br />
            <br />
            <RaisedButton
              label="Update Your Info"
              style={style}
              primary={true}
              onClick={this.submitData}
            />
            <br />
            <Profile />
          </Paper>
        </Fragment>
      </div>
    );
  }
}
const style = {
  margin: 15
};

const styles = theme => ({
  Paper: {
    margin: 25,
    padding: theme.spacing.unit * 4,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center"
  },
  root: {
    flexGrow: 1
  }
});
export default withStyles(styles)(UserData);
