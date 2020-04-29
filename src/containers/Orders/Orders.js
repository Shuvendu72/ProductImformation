import React, { Component } from "react";

import classes from "./Orders.module.css";

import data from "../../assets/Data/DummyData.json";
import NewOrder from "../../components/NewOrder/NewOrder";
import Order from "../../components/Order/Order.js";
import CustomButton from "../../components/Button/Button";

class Orders extends Component {
  state = {
    orders: data.slice(0, 100), // Remove .slice if wanted to display the full orderList
    isEditing: false,
    showNewOrder: false,
    newOrder: {}
  };

  isEditingToggler = () => {
    const isEditing = this.state.isEditing;
    this.setState({
      isEditing: !isEditing 
    });
  };

  newOrderToggler = () => {
    const showNewOrder = this.state.showNewOrder;
    this.setState({
      showNewOrder: !showNewOrder
    });
  };

  valueChangedHandler = (event, orderID) => {
    const name = event.target.name;
    const orderIndex = this.state.orders.findIndex(o => {
      return o.id === orderID;
    });
    const order = this.state.orders[orderIndex];
    order[name] = event.target.value;
    const orders = [...this.state.orders];
    this.setState({
      orders: orders
    });
    let localOrders = [...this.state.orders];
    localStorage.setItem("orders", JSON.stringify(localOrders)); //This will save the data to the localStorage
  };

  newOrderValueChangedHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    const order = { ...this.state.newOrder };
    order[name] = value;
    this.setState({
      newOrder: order
    });
  };

  newOrderHandler = () => {
    const order = { ...this.state.newOrder };
    const orders = [...this.state.orders];
    orders.splice(0, 0, order);
    this.setState({
      orders: orders
    });
    let localOrders = [...orders];
    localStorage.setItem("orders", JSON.stringify(localOrders));
  };

  componentDidMount(prevProps, PrevState) {
    let localOrders = localStorage.getItem("orders");
      if (localOrders != undefined) {
        this.setState({
          orders: JSON.parse(localOrders)
        });
      }
  }

  render() {
    let newOrder = null;
    if (this.state.showNewOrder) {
      newOrder = (
        <NewOrder
          newValue={this.newOrderValueChangedHandler}
          clicked={this.newOrderHandler}
        />
      );
    }
    let orders = this.state.orders.map(value => {
      return (
        <Order
          key={value.id}
          name={value.customer_name}
          email={value.customer_email}
          product={value.product}
          quantity={value.quantity}
          valueChange={event => this.valueChangedHandler(event, value.id)}
          isEditing={this.state.isEditing}
        />
      );
    });
    return (
      <div>
        <div style={{ height: "50px" }}>
          <CustomButton clicked={this.newOrderToggler}>
            Create new Order
          </CustomButton>
        </div>
        <div>{newOrder}</div>
        {!this.state.isEditing ? (
          <CustomButton clicked={this.isEditingToggler}>
            Edit Complete Orders
          </CustomButton>
        ) : (
          <CustomButton clicked={this.isEditingToggler}>Done</CustomButton>
        )}
        <section className={classes.Orders}>{orders}</section>
      </div>
    );
  }
}

export default Orders;
