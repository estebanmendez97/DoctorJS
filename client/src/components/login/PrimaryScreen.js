import React, { Component, Fragment } from "react";
import SugarSub from "../sugarIntake/SugarSub.jsx";
import Carbs from "../carbsIntake/Carbs.jsx";


class UploadScreen extends Component {
  render() {
    return (
      <Fragment>
      <div>
        <h1>
          <center>Welcome to DoctorJS!!!</center>
        </h1>
        <SugarSub />
        <br />
        <Carbs />
      </div>

      </Fragment>
    );

  }
}
export default UploadScreen;
