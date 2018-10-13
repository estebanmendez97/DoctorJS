import React from "react";

const ProfileItem = props => (
  <div>
    {props.profileItem.gender}
    <br />
    {props.profileItem.age}
    <br />
    {props.profileItem.weight}
    <br />
    {props.profileItem.height}
  </div>
);
export default ProfileItem;
