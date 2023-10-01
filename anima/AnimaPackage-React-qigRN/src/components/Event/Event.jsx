/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Property1Comment } from "../../icons/Property1Comment";
import { Property1Heart } from "../../icons/Property1Heart";
import { Button } from "../Button";
import { Icon } from "../Icon";
import "./style.css";

export const Event = ({ type, device, className }) => {
  return (
    <div className={`event ${type} ${device} ${className}`}>
      {type === "proposed" && (
        <>
          <div className="top-bar">
            {device === "mobile" && (
              <>
                <div className="div">
                  <img className="pfp" alt="Pfp" src="/img/pfp-5.png" />
                  <div className="text-wrapper-2">0xA92Cb1..EC8B</div>
                </div>
                <div className="div-2">
                  <Property1Heart className="icon-2" />
                  <div className="text-wrapper-3">3461</div>
                </div>
              </>
            )}

            {device === "desktop" && (
              <>
                <img className="pfp" alt="Pfp" src="/img/pfp-5.png" />
                <div className="text-wrapper-2">0xA92Cb1..EC8B</div>
              </>
            )}
          </div>
          <p className="how-about-mohamed-VS">
            How About Mohamed Vs Aex Revenge Next Week? If It Gets More Than 3000 Likes And I Publish It
          </p>
          <div className="bottom-bar">
            <div className="div">
              <Icon property1="clash-royale-big" />
              <div className="text-wrapper-4">JAN, 29TH, 2023</div>
            </div>
            <div className="replies">
              <div className="div-2">
                {device === "desktop" && <Property1Heart className="icon-2" />}

                {device === "mobile" && <Property1Comment className="icon-2" />}

                <div className="element">
                  {device === "desktop" && <>3461</>}

                  {device === "mobile" && <>13</>}
                </div>
              </div>
              {device === "desktop" && (
                <div className="div-2">
                  <Property1Comment className="icon-2" />
                  <div className="text-wrapper-5">13</div>
                </div>
              )}

              <Button className="button-2" divClassName="button-instance" property1="tertiary" />
            </div>
          </div>
        </>
      )}

      {["past", "upcoming"].includes(type) && (
        <>
          <div className="div-3">
            {type === "upcoming" && (
              <>
                <img className="img" alt="Img" src={device === "desktop" ? "/img/img.png" : "/img/img-1.png"} />
                <div className="info">
                  {device === "mobile" && (
                    <div className="game">
                      <Icon property1="clash-royale-big" />
                      <div className="text-wrapper-4">CLASH ROYALE</div>
                    </div>
                  )}

                  {device === "desktop" && (
                    <div className="game-2">
                      <Icon property1="clash-royale-big" propertyClashClassName="icon-instance" />
                      <div className="CLASH-ROYALE">Clash Royale</div>
                    </div>
                  )}

                  <img className="line" alt="Line" src={device === "desktop" ? "/img/line-4.svg" : "/img/line-7.svg"} />
                  {device === "desktop" && (
                    <div className="metrics">
                      <div className="metric">
                        <div className="text-wrapper-6">Supporters</div>
                        <div className="text-wrapper-7">32</div>
                      </div>
                      <img className="line" alt="Line" src="/img/line-4.svg" />
                      <div className="metric">
                        <div className="text-wrapper-8">Volume</div>
                        <div className="text-wrapper-7">$12,453</div>
                      </div>
                    </div>
                  )}

                  {device === "mobile" && (
                    <>
                      <div className="metric">
                        <div className="text-wrapper-9">Supporters</div>
                        <div className="text-wrapper-7">32</div>
                      </div>
                      <img className="line" alt="Line" src="/img/line-6.svg" />
                      <div className="metric">
                        <div className="text-wrapper-10">Volume</div>
                        <div className="text-wrapper-7">$12,453</div>
                      </div>
                    </>
                  )}
                </div>
              </>
            )}

            {device === "mobile" && type === "past" && <>YESTERDAY</>}

            {device === "desktop" && type === "past" && <>Yesterday</>}
          </div>
          <div className="date">
            {type === "upcoming" && <div className="text-wrapper-11">Jun 14, 8:30 PM</div>}

            {type === "past" && (
              <>
                <div className="users">
                  <div className="user">
                    <Icon
                      property1="pfp-1"
                      propertyClashClassName={`${device === "desktop" ? "class-2" : "class-3"}`}
                    />
                    <div className="text-wrapper-12">Mohamed</div>
                  </div>
                  <div className="win">
                    <Icon property1="win" propertyClashClassName="icon-3" shape="/img/shape-3.svg" />
                  </div>
                  <div className="user-2">
                    <Icon
                      property1="pfp-2"
                      propertyClashClassName={`${device === "desktop" ? "class-4" : "class-5"}`}
                    />
                    <div className="text-wrapper-13">Alex</div>
                  </div>
                </div>
                <div className="info-2">
                  {device === "mobile" && (
                    <div className="game">
                      <Icon property1="clash-royale-big" />
                      <div className="text-wrapper-4">CLASH ROYALE</div>
                    </div>
                  )}

                  {device === "desktop" && (
                    <div className="game-2">
                      <Icon property1="clash-royale-big" propertyClashClassName="icon-4" />
                      <div className="CLASH-ROYALE">Clash Royale</div>
                    </div>
                  )}

                  <img className="line" alt="Line" src={device === "desktop" ? "/img/image.svg" : "/img/line-3.svg"} />
                  {device === "desktop" && (
                    <div className="metrics">
                      <div className="metric">
                        <div className="text-wrapper-6">Supporters</div>
                        <div className="text-wrapper-7">32</div>
                      </div>
                      <img className="line" alt="Line" src="/img/image.svg" />
                      <div className="metric">
                        <div className="text-wrapper-8">Volume</div>
                        <div className="text-wrapper-7">$12,453</div>
                      </div>
                    </div>
                  )}

                  {device === "mobile" && (
                    <>
                      <div className="metric">
                        <div className="text-wrapper-9">Supporters</div>
                        <div className="text-wrapper-7">32</div>
                      </div>
                      <img className="line" alt="Line" src="/img/line-2.svg" />
                      <div className="metric">
                        <div className="text-wrapper-10">Volume</div>
                        <div className="text-wrapper-7">$12,453</div>
                      </div>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

Event.propTypes = {
  type: PropTypes.oneOf(["upcoming", "proposed", "past"]),
  device: PropTypes.oneOf(["desktop", "mobile"]),
};
