import React from "react";
import Selected from "../Selected/Selected";
import "./Cart.css";

const Cart = (props) => {
  console.log(props);
  // console.log(props.cart)
  const { cart } = props;
  let total = 0;
  for (let dev of cart) {
    total = total + dev.salary;
  }

  // cart section
  return (
    <div className="col card p-2 py-3 cart-dis">
      <h2>Total Developer Selected: {cart.length}</h2>
      <hr />
      <h4>
        Total Cost: <br /> ${total}
      </h4>
      <ol className="text-white ">
        {cart.map((developer) => (
          <Selected developer={developer}></Selected>
        ))}
      </ol>
    </div>
  );
};
export default Cart;
