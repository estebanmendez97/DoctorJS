import React, { Component } from "react";
import axios from "axios";

import CarbsList from "./CarbsList.jsx";

class CarbsGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios
      .get("/carbLevel")
      .then(res => {
        this.setState({ list: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <CarbsList carbsList={this.state.list} />
      </div>
    );
  }
}
export default CarbsGraph;
