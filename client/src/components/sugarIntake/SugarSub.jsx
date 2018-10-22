import React, { Component, Fragment } from "react";
import axios from "axios";
//material-ui core
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
//components to render
import SugarChart from "./SugarChart";
import SugarList from "./SugarList.jsx";

class SugarSub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levels: []
    };

    this.handleWhenMeasure = this.handleWhenMeasure.bind(this);
    this.handleGlucose = this.handleGlucose.bind(this);
    this.submitLevel = this.submitLevel.bind(this);
    this.addLevel = this.addLevel.bind(this);
  }

  handleWhenMeasure(e) {
    e.preventDefault();
    console.log("this is the event ", e.target.value);
    this.setState({
      whenMesuare: e.target.value
    });
  }

  handleGlucose(e) {
    e.preventDefault();
    this.setState({
      Glucose: e.target.value
    });
  }

  addLevel(whenMesuare, Glucose) {
    axios
      .post("/submitLevel", {
        whenMesuare: whenMesuare,
        Glucose: Glucose
      })
      .then(() => this.getLevel())
      .catch(error => console.log("ERROR:", error));
  }

  getLevel() {
    axios
      .get("/submitLevel")
      .then(res => this.setState({ levels: res.data }))
      .catch(err => {
        console.log(err);
      });
  }

  submitLevel(event) {
    event.preventDefault();
    this.addLevel(this.state.whenMesuare, this.state.Glucose);
    alert(this.state.whenMesuare);
    this.setState({
      Glucose: 0
    });
  }

  render() {
    return (
      <Paper style={styles.Paper}>
        <center>
          <Fragment>
            <Typography variant="title" gutterBottom align="center">
              Sugar Intake
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="center">
              When:
              <select
                onChange={this.handleWhenMeasure}
                value={this.state.whenMesuare}
                type="select"
              >
                <option>Glucose Reading</option>
                <option>Before Breakfast</option>
                <option>Before Lunch</option>
                <option>Before Dinner</option>
                <option>1Hr.After Meal</option>
                <option>2Hrs. After Meal</option>
                <option>Before Physical Activity</option>
                <option>During Physical Activity</option>
                <option>After Physical Activity</option>
                <option>Before Bed</option>
                <option>Middle of Night</option>
                <option>Other</option>
              </select>
            </Typography>
            <br />
            <Typography variant="h6" gutterBottom>
              Glucose Level:
              <TextField
                type="sugar intake"
                hintText="Enter your Glucose Level "
                floatingLabelText="Enter your Glucose Level"
                value={this.state.Glucose}
                onChange={this.handleGlucose}
              />
            </Typography>
            <RaisedButton
              label="Submit your sugar level"
              primary={true}
              style={style}
              onClick={this.submitLevel}
            />
            <br />
            <SugarList sugarLevels={this.state.levels} />
            <SugarChart />
          </Fragment>
        </center>
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

export default withStyles(styles)(SugarSub);
