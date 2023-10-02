/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Tab = ({ showIcon = false, property1, className, text = "Clash Royale", text1 = "All" }) => {
  return (
    <div className={`tab ${property1} ${className}`}>
      <div className="all">
        {property1 === "active" && <>{text1}</>}

        {property1 === "inactive" && <>{text}</>}
      </div>
    </div>
  );
};

Tab.propTypes = {
  showIcon: PropTypes.bool,
  property1: PropTypes.oneOf(["inactive", "active"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
