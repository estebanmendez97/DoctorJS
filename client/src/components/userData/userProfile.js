import React, { Component } from "react";
import axios from "axios";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: []
    };
  }
  componentDidMount() {
    axios
      .get("/userData")
      .then(res => this.setState({ profile: res.data }))
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return <div>{this.state.profile}</div>;
  }
}
export default Profile;
