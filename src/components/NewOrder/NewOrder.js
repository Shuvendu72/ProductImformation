import React from "react";

const neworder = props => {
  return (
    <div style={{ margin: "20px auto 50px auto" }}>
      <div style={{ margin: "20px 0px" }}>
        <input
          name="id"
          type="text"
          placeholder="id"
          onChange={props.newValue}
        />
      </div>
      <div style={{ margin: "10px 0px" }}>
        <input
          name="customer_name"
          type="text"
          placeholder="name"
          onChange={props.newValue}
        />
      </div>
      <div style={{ margin: "10px 0px" }}>
        <input
          name="customer_email"
          type="email"
          placeholder="email"
          onChange={props.newValue}
        />
      </div>
      <div style={{ margin: "10px 0px" }}>
        <input
          name="product"
          type="product"
          placeholder="product"
          onChange={props.newValue}
        />
      </div>
      <div style={{ margin: "10px 0px" }}>
        <input
          name="quantity"
          type="number"
          placeholder="quantity"
          onChange={props.newValue}
        />
      </div>
      <div style={{ margin: "10px 0px" }}>
        <button onClick={props.clicked}>Submit</button>
      </div>
    </div>
  );
};

export default neworder;
