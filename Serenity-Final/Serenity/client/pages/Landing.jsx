import React from "react";

import "./landing.css";
const Landing = () => {
  return (
    <>
      <div id="Water">
        <img
          id="Water_drop"
          src={require("../components/assets/Water_Drop.svg")}
        />

        <div id="button">
          <button type="button" className="btn btn-link">
            Enter
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
