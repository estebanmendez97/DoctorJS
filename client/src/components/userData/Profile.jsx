import React, { Component } from "react";
import axios from "axios";
import ProfileList from "./ProfileList.jsx";

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
    return (
      <div>
        <ProfileList profileList={this.state.profile} />
      </div>
    );
  }
}
export default Profile;
