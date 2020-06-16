import React from "react";
import "./Card.css";
const card = (props) => {
  let bgColor = props.code;
  return (
    <div className="card text-center border-dark about-card m-2">
      <div className="card-body">
        <div
          style={{ backgroundColor: `${bgColor}` }}
          className="py-5 mb-2 text-center text-white "
        >
          {props.val}
        </div>
        <p className="text-muted">Color Code : {props.code}</p>
      </div>

      <button className="btn btn-danger mx-2 mb-3 " onClick={props.deleteCard}>
        Delete Color
      </button>
    </div>
  );
};

export default card;
