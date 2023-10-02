/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon18 } from "../../icons/Icon18";
import { Icon19 } from "../../icons/Icon19";
import { Icon33 } from "../../icons/Icon33";
import { Property1Back } from "../../icons/Property1Back";
import { Property1Comment } from "../../icons/Property1Comment";
import { Property1Discord } from "../../icons/Property1Discord";
import { Property1Heart } from "../../icons/Property1Heart";
import { Property1Instagram } from "../../icons/Property1Instagram";
import { Property1Medium } from "../../icons/Property1Medium";
import { Property1MenuLeaderboard } from "../../icons/Property1MenuLeaderboard";
import { Property1Notification } from "../../icons/Property1Notification";
import { Property1Plus } from "../../icons/Property1Plus";
import { Property1Receive } from "../../icons/Property1Receive";
import { Property1Send } from "../../icons/Property1Send";
import { Property1Star } from "../../icons/Property1Star";
import { Property1Win2 } from "../../icons/Property1Win2";
import { Property1X } from "../../icons/Property1X";
import { Property1Youtube } from "../../icons/Property1Youtube";
import "./style.css";

export const Icon = ({ property1, propertyClashClassName, shape = "/img/shape-2.svg" }) => {
  return (
    <>
      {property1 === "heart" && <Property1Heart className="instance-node" />}

      {property1 === "notification" && <Property1Notification className="instance-node-2" />}

      {property1 === "comment" && <Property1Comment className="instance-node" />}

      {property1 === "reply" && <Icon33 className="instance-node" />}

      {(property1 === "back-2" ||
        property1 === "clash-royale-40" ||
        property1 === "clash-royale-big" ||
        property1 === "clash-royale" ||
        property1 === "flashlight" ||
        property1 === "fortnite" ||
        property1 === "menu-events" ||
        property1 === "menu-profile" ||
        property1 === "pfp-1" ||
        property1 === "pfp-2" ||
        property1 === "the-last-of-us" ||
        property1 === "top-up-2" ||
        property1 === "win") && (
        <div className={`icon property-1-${property1} ${propertyClashClassName}`}>
          {["back-2", "flashlight", "menu-events", "menu-profile", "top-up-2", "win"].includes(property1) && (
            <img
              className="icon-color"
              alt="Icon color"
              src={
                property1 === "menu-profile"
                  ? "/img/icon-color-1.svg"
                  : property1 === "win"
                  ? shape
                  : property1 === "top-up-2"
                  ? "/img/icon-color.svg"
                  : property1 === "flashlight"
                  ? "/img/shape-1.svg"
                  : property1 === "back-2"
                  ? "/img/shape.svg"
                  : "/img/icon-color-2.svg"
              }
            />
          )}
        </div>
      )}

      {property1 === "discord" && <Property1Discord className="instance-node-2" />}

      {property1 === "x" && <Property1X className="instance-node-2" />}

      {property1 === "youtube" && <Property1Youtube className="instance-node-2" />}

      {property1 === "medium" && <Property1Medium className="instance-node-2" />}

      {property1 === "instagram" && <Property1Instagram className="instance-node-2" />}

      {property1 === "search" && <Icon18 className="instance-node" />}

      {["plus-16", "plus"].includes(property1) && (
        <Property1Plus className={`${property1 === "plus-16" ? "class" : "instance-node-3"}`} />
      )}

      {property1 === "menu-leaderboard" && <Property1MenuLeaderboard className="property-menu" />}

      {property1 === "back" && <Property1Back className="instance-node-2" />}

      {property1 === "top-up" && <Icon19 className="instance-node" />}

      {property1 === "receive" && <Property1Receive className="instance-node" />}

      {property1 === "send" && <Property1Send className="instance-node" />}

      {property1 === "win-2" && <Property1Win2 className="instance-node-3" />}

      {property1 === "star" && <Property1Star className="instance-node-3" />}
    </>
  );
};

Icon.propTypes = {
  property1: PropTypes.oneOf([
    "back-2",
    "reply",
    "clash-royale-big",
    "win",
    "back",
    "fortnite",
    "notification",
    "clash-royale",
    "send",
    "the-last-of-us",
    "flashlight",
    "heart",
    "pfp-1",
    "search",
    "menu-events",
    "youtube",
    "menu-leaderboard",
    "star",
    "top-up",
    "top-up-2",
    "comment",
    "clash-royale-40",
    "x",
    "plus-16",
    "receive",
    "pfp-2",
    "plus",
    "menu-profile",
    "instagram",
    "win-2",
    "discord",
    "medium",
  ]),
  shape: PropTypes.string,
};
