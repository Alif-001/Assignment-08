import React from "react";
import "./Selected.css";

// selected section
const Selected = (props) => {
  console.log(props);
  const { name, img } = props.developer;
  return (
    <div className="cart-selected rounded-3 ">
      <div className="selected-dev d-flex text-center   text-white px-4 me-3 rounded-3">
        <img className="p-2" src={img} alt="" />
        <h6 className="p-3 me-5">{name}</h6>
      </div>
    </div>
  );
};

export default Selected;
