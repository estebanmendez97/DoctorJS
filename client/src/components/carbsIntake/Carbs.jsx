import React, { Component, Fragment } from "react";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import CarbsChart from "./CarbsChart";
import CarbsList from "./CarbsList.jsx";
import axios from "axios";

class Carbs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };

    this.handleAmountMesuare = this.handleAmountMesuare.bind(this);
    this.handleCarbs = this.handleCarbs.bind(this);
    this.submitLevel = this.submitLevel.bind(this);
    this.addLevel = this.addLevel.bind(this);
  }

  handleAmountMesuare(e) {
    e.preventDefault();
    console.log("this is the event ", e.target.value);
    this.setState({
      amountMesuare: e.target.value
    });
  }

  handleCarbs(e) {
    e.preventDefault();
    this.setState({
      Carbs: e.target.value
    });
  }

  addLevel(amountMesuare, Carbs) {
    axios
      .post("/carbLevel", {
        amountMesuare: amountMesuare,
        Carbs: Carbs
      })
      .then(() => this.getLevel())
      .catch(error => console.log("ERROR:", error));
  }

  getLevel() {
    axios
      .get("/carbLevel")
      .then(res => {
        this.setState({ list: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  submitLevel(event) {
    event.preventDefault();
    this.addLevel(this.state.amountMesuare, this.state.Carbs);
    alert(this.state.amountMesuare);
    this.setState({
      Carbs: 0
    });
  }

  render() {
    return (
      <div className={styles.root}>
        <Paper style={styles.Paper}>
          <center>
            <Fragment>
              <Typography variant="title" gutterBottom align="center">
                Carbs Readings
              </Typography>
              <Typography variant="subtitle1" gutterBottom align="center">
                When:
                <select
                  onChange={this.handleAmountMesuare}
                  value={this.state.amountMesuare}
                  type="select"
                >
                  <option>Carbs Reading</option>
                  <option>Breakfast</option>
                  <option>snack1</option>
                  <option>lunch</option>
                  <option>snack2</option>
                  <option>Dinner</option>
                </select>
              </Typography>
              <br />
              <Typography variant="subtitle1" gutterBottom align="center">
                Carbs Level:
                <input
                  value={this.state.Carbs}
                  placeholder="000"
                  onChange={this.handleCarbs}
                />
              </Typography>
              <RaisedButton
                label="Submit your carbs intake"
                primary={true}
                style={style}
                onClick={this.submitLevel}
              />
              <br />
              <CarbsList carbsList={this.state.list} />
              <CarbsChart />
            </Fragment>
          </center>
        </Paper>
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
    //padding: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center"
  },
  root: {
    flexGrow: 1
  }
});
export default withStyles(styles)(Carbs);
