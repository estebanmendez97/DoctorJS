import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import SimpleLineChart from "./LineChart.js";
import SimpleTable from "./Table.js";

const styles = theme => ({
  root: {
    display: "flex"
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  },

  h5: {
    marginBottom: theme.spacing.unit * 2
  }
});

class MainDashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography variant="h4" gutterBottom component="h2">
            My Levels
          </Typography>
          <Typography component="div" className={classes.chartContainer}>
            <SimpleLineChart />
          </Typography>
          <Typography variant="h4" gutterBottom component="h2">
            Dietary Sample
          </Typography>
          <div className={classes.tableContainer}>
            <SimpleTable />
          </div>
        </main>
      </div>
    );
  }
}

MainDashboard.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(MainDashboard);
