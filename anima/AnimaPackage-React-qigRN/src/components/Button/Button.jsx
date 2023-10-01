/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon19 } from "../../icons/Icon19";
import { Icon33 } from "../../icons/Icon33";
import "./style.css";

export const Button = ({ showIcon = false, property1, text = "Place support", className, divClassName }) => {
  return (
    <div className={`button ${property1} ${className}`}>
      {["primary", "secondary"].includes(property1) && (
        <div className="place-support">
          {property1 === "primary" && <>{text}</>}

          {property1 === "secondary" && <>Remove reminder</>}
        </div>
      )}

      {property1 === "tertiary" && (
        <>
          <div className={`text-wrapper ${divClassName}`}>Reply</div>
          <Icon33 className="icon-33" />
        </>
      )}

      {property1 === "button-icon" && <Icon19 className="icon-19" />}
    </div>
  );
};

Button.propTypes = {
  showIcon: PropTypes.bool,
  property1: PropTypes.oneOf(["primary", "button-icon", "secondary", "tertiary"]),
  text: PropTypes.string,
};
