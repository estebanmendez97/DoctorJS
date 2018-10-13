import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Tabs, Tab } from "material-ui/Tabs";

const styles = {
  headline: {
    fonstsize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

const Navigation = () => (
  <MuiThemeProvider>
    <Tabs>
      <Tab label="Item One">
        <div>
          <h2 style={styles.headline}>Tab ONE</h2>
          <p>React Component</p>
        </div>
      </Tab>
      <Tab label="Item Two">
        <div>
          <h2 style={styles.headline}>Tab TWO</h2>
          <p>React Component</p>
        </div>
      </Tab>
      <Tab label="item three">
        <div>
          <h2 style={styles.headline}>Tab THREE</h2>
          <p>React Component</p>
        </div>
      </Tab>
    </Tabs>
  </MuiThemeProvider>
);
export default Navigation;
