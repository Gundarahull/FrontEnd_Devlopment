import React from "react";

const Cards = (props) => {
  return (
    <div
      style={{
        border: "2px solid black",
        width: "300px",
        height: "300px",
        textAlign: "center",
        backgroundColor: "gray",
      }}
    >
      <h1 style={{ fontFamily: "cursive", fontSize: "34px" }}>
        Card-{props.title}
      </h1>
      <p>Card Description about Something-{props.description}</p>
    </div>
  );
};

export default Cards;
