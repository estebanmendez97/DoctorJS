import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

//import MainDrawer from "./layouts/MainDrawer.jsx";

import SugarSub from "./components/sugarIntake/SugarSub";
import BloodPressure from "./components/bloodPressure/BloodPressure";
import Carbs from "./components/carbsIntake/Carbs";
import UserData from "./components/userData/UserData";
import PermanentDrawer from "../src/layouts/PermanentDrawer";

class UploadScreen extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={PermanentDrawer} />
          <Route path="/userData" component={UserData} />
          <Route path="/submitLevel" component={SugarSub} />
          <Route path="/carbLevel" component={Carbs} />
          <Route path="/bloodPressure" component={BloodPressure} />
        </div>
      </BrowserRouter>
    );
  }
}
export default UploadScreen;
