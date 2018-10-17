import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Navigation from "../layouts/Navigation.jsx";
import SugarSub from "../sugarIntake/SugarSub.jsx";
import BloodPressure from "../bloodPressure/BloodPressure.jsx";
import Carbs from "../carbsIntake/Carbs.jsx";
import UserData from "../userData/UserData.jsx";

class UploadScreen extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Grid
          container
          direction="center"
          justify="space-evenly"
          alignItems="baseline"
          spacing={24}
        >
          <div>
            <Grid item xs>
              <UserData />
            </Grid>
          </div>
          <div>
            <Grid item xs>
              <SugarSub />
            </Grid>
          </div>
          <div>
            <Grid item xs>
              <BloodPressure />
            </Grid>
          </div>
          <div>
            <Grid item xs>
              <Carbs />
            </Grid>
          </div>
        </Grid>
      </Fragment>
    );
  }
}
export default UploadScreen;
