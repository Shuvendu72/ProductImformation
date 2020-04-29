import React from "react";
import classes from "./Button.module.css";

const customButton = props => {
return <button className={classes.CustomButton} onClick={props.clicked}>{props.children}</button>;
};

export default customButton;
