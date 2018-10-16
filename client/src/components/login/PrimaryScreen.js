import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Navigation from "../layouts/Navigation.jsx";
import SugarSub from "../sugarIntake/SugarSub.jsx";
import BloodPressure from "../bloodPressure/BloodPressure.jsx";
import Carbs from "../carbsIntake/Carbs.jsx";
import UserData from "../userData/UserData.jsx";

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center"
  }
};
class UploadScreen extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Grid container spacing={8}>
          <div>
            <Grid item sm={12} xs>
              <Paper style={style.Paper}>
                <h2>User Profile</h2>
                <UserData />
              </Paper>
            </Grid>
            <Grid item sm={12} xs>
              <Paper style={style.Paper}>
                <h2>Sugar intake</h2>
                <SugarSub />
              </Paper>
            </Grid>
            <Grid item sm={12} xs>
              <Paper style={style.Paper}>
                <h2>Blood Pressure</h2>
                <BloodPressure />
              </Paper>
            </Grid>
            <Grid item sm={12} xs>
              <Paper style={style.Paper}>
                <h2>carbs</h2>
                <Carbs />
              </Paper>
            </Grid>
          </div>
        </Grid>
      </Fragment>
    );
  }
}
export default UploadScreen;
