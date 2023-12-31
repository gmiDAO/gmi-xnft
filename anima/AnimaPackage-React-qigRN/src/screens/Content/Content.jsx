import React from "react";
import { Button } from "../../components/Button";
import { Event } from "../../components/Event";
import { Search } from "../../components/Search";
import { Tab } from "../../components/Tab";
import { Logo } from "../../icons/Logo";
import { Property1Notification } from "../../icons/Property1Notification";
import "./style.css";

export const Content = () => {

  console.log("start content")

  console.log
  const handleButtonClick = (id) => {
    console.log("handlebutton")
    console.log(id)
    //setActiveButton(buttonIndex);
};


//asdfsdfsdfds

  return (
    <div className="content">
      <div className="nav">
        <Logo className="logo-instance" />
        <div className="menu">
          <div className="navlinks">
            <div className="navlink">
              <div className="text-wrapper-14">Events</div>
              <img className="line-2" alt="Line" src="/img/line.svg" />
            </div>
            <div className="text-wrapper-14">Leaderboard</div>
          </div>
          <div className="icons">
            <Property1Notification className="icon-17" />
            <img className="pfp-2" alt="Pfp" src="/img/pfp-4.png" />
          </div>
        </div>
        <Search className="search-instance" />
      </div>
      <div className="div-4">
        <div onClick={handleButtonClick}  className="buttons">
          <Button   property1="primary" text="Propose event" />
          <div className="tabs">
            <div className="tabs-2">
              

              <Tab className="design-component-instance-node" property1="active" />
              <Tab className="design-component-instance-node" property1="inactive" />
              <Tab className="design-component-instance-node" property1="inactive" text="Fortnite" />
              <Tab className="design-component-instance-node" property1="inactive" text="Clash Royale" />
            </div>
            <div className="tabs-2">
              <Tab className="design-component-instance-node" property1="active" text1="Proposed" />
              <Tab className="design-component-instance-node" property1="inactive" text="Upcoming" />
              <Tab className="design-component-instance-node" property1="inactive" text="Past" />
            </div>
          </div>
        </div>
        <div className="events">
        
          <Event className="design-component-instance-node" device="desktop" type="proposed" />
          <Event className="design-component-instance-node" device="desktop" type="proposed" />
        </div>
      </div>
    </div>
  );
};
