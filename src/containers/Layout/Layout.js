import React, { Component } from "react";
import classes from "./Layout.module.css";
import Orders from "../Orders/Orders";
import CustomButton from "../../components/Button/Button";


class Layout extends Component {
  render() {
    const { name, ProfileImage, email } = this.props.user;
    return (
      <div className={classes.Layout}>
        <div className={classes.NavWrapper}>
          <nav>
            <div className={classes.ProfileWrap}>
              <img src={ProfileImage} width="50px" height="50px"  alt='User_profile'/>
            </div>
            <h5> Welcome {name}</h5>
            <h5>Your email : {email}</h5>
            <div className={classes.EmptyBar}></div>
          </nav>
          <div className={classes.LogoutWrap}>
            <CustomButton clicked={this.props.logout}>Log Out</CustomButton>
          </div>
        </div>
        <Orders />
      </div>
    );
  }
}

export default Layout;
