import React from "react";

function Caption({ title, imgNumber, logo }) {
  return (
    <div>
      <p>{title}</p>
      <img src={imgNumber} alt="" />
      <img src={logo} alt="" />
    </div>
  );
}

export default Caption;
