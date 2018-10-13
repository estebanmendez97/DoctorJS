import React, { Component, Fragment } from "react";

import SugarSub from "../sugarIntake/SugarSub.jsx";
import BloodPressure from "../bloodPressure/BloodPressure.jsx";
import Carbs from "../carbsIntake/Carbs.jsx";
import UserData from "../userData/UserData.jsx";

class UploadScreen extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <h2>User Profile</h2>
          <UserData />
          <br />
          <br />
          <h2>Sugar intake</h2>
          <SugarSub />
          <br />
          <br />
          <h2>Blood Pressure</h2>
          <BloodPressure />
          <br />
          <h2>carbs</h2>
          <Carbs />
        </div>
      </Fragment>
    );
  }
}
export default UploadScreen;
