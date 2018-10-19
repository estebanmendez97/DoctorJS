import React, { Component } from "react";

import SimpleLineChart from "./LineChart.js";
import SimpleTable from "./Table.js";

class MainDashboard extends Component {
  render() {
    return (
      <div>
        <SimpleLineChart />
        <SimpleTable />
      </div>
    );
  }
}
export default MainDashboard;
