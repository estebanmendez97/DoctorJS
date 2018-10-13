import React from "react";
import Avatar from "material-ui/Avatar";
import List from "material-ui/List";
import ListItem from "material-ui/ListItem";

const style = { margin: 10 };

const UserAvatar = () => (
  <List>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar src="" /> //set up your image source when you log in
      }
    >
      Image Avatar
    </ListItem>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
          src="" // your image source path  when you log in jpg file or jpeg file
          size={30}
          style={style}
        />
      }
    >
      Image avatar with custom size
    </ListItem>
  </List>
);
export default UserAvatar;
