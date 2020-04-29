import React, { Component } from "react";
import classes from "./Order.module.css";
import CustomButton from '../Button/Button'

class Order extends Component {
  state = {
    isEditing: false
  };

  editingToggleHandler = () => {
    const isEditing = this.state.isEditing;
    this.setState({
      isEditing: !isEditing
    });
  };

  render() {
    let order = (
      <article className={classes.Order}>
        <div className={classes.OrderWrapper}>
          <h1>{this.props.name}</h1>
          <h1>{this.props.email}</h1>
          <h1>{this.props.product}</h1>
          <h1>{this.props.quantity}</h1>
        </div>
        <CustomButton clicked={this.editingToggleHandler}>Edit</CustomButton>
      </article>
    );
    if (this.state.isEditing || this.props.isEditing) {
      order = (
        <div>
          <div className={classes.InputWrapper}>
            <input
              name="customer_name"
              type="text"
              defaultValue={this.props.name}
              onChange={this.props.valueChange}
            />
          </div>
          <div className={classes.InputWrapper}>
            <input
              name="customer_email"
              type="email"
              defaultValue={this.props.email}
              onChange={this.props.valueChange}
            />
          </div>
          <div className={classes.InputWrapper}>
            <input
              name="product"
              type="product"
              defaultValue={this.props.product}
              onChange={this.props.valueChange}
            />
          </div>
          <div className={classes.InputWrapper}>
            <input
              name="quantity"
              type="number"
              defaultValue={this.props.quantity}
              onChange={this.props.valueChange}
            />
          </div>
          <CustomButton clicked={this.editingToggleHandler}>Done</CustomButton>
        </div>
      );
    }
    return <article className={classes.Order}>{order}</article>;
  }
}

export default Order;
