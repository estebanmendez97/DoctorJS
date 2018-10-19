import React from "react";
import { Link } from "react-router-dom";
//material ui core
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import BubbleChart from "@material-ui/icons/BubbleChart";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Link to="/">
          <DashboardIcon />
        </Link>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <Link to="/userData">
          <PersonIcon />
        </Link>
      </ListItemIcon>
      <ListItemText primary="My Profile" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <Link to="/carbLevel">
          <BubbleChart />
        </Link>
      </ListItemIcon>
      <ListItemText primary="Carbs" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <Link to="submitLevel">
          <BubbleChart />
        </Link>
      </ListItemIcon>
      <ListItemText primary="Sugar Level" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <Link to="bloodPressure">
          <BubbleChart />
        </Link>
      </ListItemIcon>
      <ListItemText primary="BloodPressure" />
    </ListItem>
  </div>
);
