import React from "react";
import Typography from "@material-ui/core/Typography";
const ProfileItem = props => (
  <div>
    <Typography variant="title" gutterBottom>
      {props.profileItem.gender}
    </Typography>
    <br />
    <Typography variant="subheading">
      My Age
      {props.profileItem.age}
    </Typography>
    <br />
    <Typography variant="subheading">
      My Weight
      {props.profileItem.weight}
    </Typography>
    <br />
    <Typography variant="subheading">
      My height(cm)
      {props.profileItem.height}
    </Typography>
  </div>
);
export default ProfileItem;
