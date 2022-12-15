import React from "react";
import { ListItem } from "@material-ui/core";
import {useStyles} from './menu.styles'
const MenuItemComponent =(props)=> {
  const classes = useStyles();
  const { active, icon, title, onClick } = props;
  const Icon = icon;

  return (
    <div>
      <ListItem
        button
        style={{ height: "7vh" }}
        onClick={onClick}
        className={`${(active && classes.activeTitle && classes.activeBar && classes.activeContainer )}`}
      >
        <Icon
          fill={active ? "#DDE2FF" : "#9FA2B4"}
          opacity={!active &&   "0.4"}
        />
        <span 

        className={classes.title}>
          
          {title}
        </span>
      </ListItem>
    </div>
  );
}

export default MenuItemComponent;
