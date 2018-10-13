import React from "react";
import ProfileItem from "./ProfileItem.jsx";

const ProfileList = props => (
  <div>
    {props.profileList.map((profileItem, index) => (
      <ProfileItem profileItem={profileItem} key={index} />
    ))}
  </div>
);
export default ProfileList;
