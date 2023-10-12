/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon18 } from "../../icons/Icon18";
import "./style.css";

export const Search = ({ className, inputType = "text" }) => {
  return (
    <div className={`search ${className}`}>
      <input className="name-token-ID" placeholder="Name, Token ID" type={inputType} />
      <Icon18 className="icon-18" />
    </div>
  );
};

Search.propTypes = {
  inputType: PropTypes.string,
};
