import React from "react";
import "./Developer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faPlusSquare} />;
const Developer = (props) => {
  const { img, name, age, salary, address, job } = props.developer;

  //   card section
  return (
    <div className="d-flex align-items-stretch ">
      <div className="col text-center  border border-2 border-white border-r">
        <div className="card h-100 bad-color d-flex align-items-stretch">
          <img
            src={img}
            className="card-img-top dev-img mx-auto mt-3 border border-2 border-white "
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title fw-bold">{name}</h4>
            <h5>Profession: {job}</h5>
            <p className="card-text">Age: {age}</p>
            <h6>Salary: ${salary}</h6>
            <p></p>

            <p>Address: {address}</p>
            <div>
              <button
                className="btn btn-warning my-btn btn-xl px-5 m-auto"
                onClick={() => props.handleAddToCart(props.developer)}
              >
                {element} Click To Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
