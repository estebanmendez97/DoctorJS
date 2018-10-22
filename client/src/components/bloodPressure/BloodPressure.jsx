import React, { Component, Fragment } from "react";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import PressureList from "./PressureList.jsx";
import BloodLineChart from "./BloodChart";

class BloodPressure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };

    this.addReading = this.addReading.bind(this);
    this.submitReading = this.submitReading.bind(this);
    this.handleWhenReading = this.handleWhenReading.bind(this);
    this.handleBloodPressure = this.handleBloodPressure.bind(this);
  }

  handleWhenReading(e) {
    e.preventDefault();
    this.setState({
      whenReading: e.target.value
    });
  }

  handleBloodPressure(e) {
    e.preventDefault();
    this.setState({
      bloodPresure: e.target.value
    });
  }

  addReading(whenReading, bloodPresure) {
    axios
      .post("/bloodPresure", {
        whenReading: whenReading,
        bloodPresure: bloodPresure
      })
      .then(() => this.getReading())
      .catch(error => console.log("Error:", error));
  }

  getReading() {
    axios
      .get("/bloodPresure")
      .then(res => {
        this.setState({ list: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  submitReading(event) {
    event.preventDefault();
    this.addReading(this.state.whenReading, this.state.bloodPresure);
    alert(this.state.whenReading);
    this.setState({
      bloodPresure: 0
    });
  }

  render() {
    return (
      <Paper style={styles.Paper}>
        <Fragment>
          <Typography variant="title" gutterBottom align="center">
            Blood Pressure
          </Typography>
          <Typography variant="subtitle1" gutterBottom align="center">
            When:
            <select
              onChange={this.handleWhenReading}
              value={this.state.whenReading}
              type="select"
            >
              <option>Blood Pressure Readings</option>
              <option>Morning Reading</option>
              <option>Afternoon Reading</option>
              <option>Night Reading</option>
            </select>
          </Typography>
          <br />
          <Typography variant="subtitle1" gutterBottom align="center">
            Blood Pressure Level:
            <input
              placeholder="000"
              value={this.bloodPresure}
              onChange={this.handleBloodPressure}
            />
            <br />
            <RaisedButton
              label="submit your blood pressure"
              primary={true}
              style={style}
              onClick={this.submitReading}
            />
          </Typography>
          <br />
          <PressureList pressure={this.state.list} />
          <BloodLineChart />
        </Fragment>
      </Paper>
    );
  }
}

const style = {
  margin: 15
};

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center"
  },
  root: {
    flexGrow: 1
  }
};
export default withStyles(styles)(BloodPressure);
