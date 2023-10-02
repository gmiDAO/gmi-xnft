import React from "react";
import { Button } from "./src/components/Button";
import { Event } from "./src/components/Event";
import { Search } from "./src/components/Search";
import { Tab } from "./src/components/Tab";
import { Logo } from "./src/icons/Logo";
import { Property1Notification } from "./src/icons/Property1Notification";
import "./style.css";

const Content: React.FC = () => {
  console.log("start content");

  const handleButtonClick = (id: any) => {
    console.log("handlebutton");
    console.log(id);
    // setActiveButton(buttonIndex);
  };

  return (
    <View className="content">
      <View className="nav">
        <Logo className="logo-instance" />
        <View className="menu">
          <View className="navlinks">
            <View className="navlink">
              <View className="text-wrapper-14">Events</View>
              <img className="line-2" alt="Line" src="/img/line.svg" />
            </View>
            <View className="text-wrapper-14">Leaderboard</View>
          </View>
          <View className="icons">
            <Property1Notification className="icon-17" />
            <img className="pfp-2" alt="Pfp" src="/img/pfp-4.png" />
          </View>
        </View>
        <Search className="search-instance" />
      </View>
      <View className="Viewn-4">
        <Viewn onClick={handleButtonClick} className="buttons">
          <Button property1="primary" text="Propose event" />
          <Viewn className="tabs">
            <Viewn className="tabs-2">
              <Tab className="design-component-instance-node" property1="active" />
              <Tab className="design-component-instance-node" property1="inactive" />
              <Tab className="design-component-instance-node" property1="inactive" text="Fortnite" />
              <Tab className="design-component-instance-node" property1="inactive" text="Clash Royale" />
            </Viewn>
            <Viewn className="tabs-2">
              <Tab className="design-component-instance-node" property1="active" text1="Proposed" />
              <Tab className="design-component-instance-node" property1="inactive" text="Upcoming" />
              <Tab className="design-component-instance-node" property1="inactive" text="Past" />
            </Viewn>
          </Viewn>
        </Viewn>
        <Viewn className="events">
          <Event className="design-component-instance-node" device="desktop" type="proposed" />
          <Event className="design-component-instance-node" device="desktop" type="proposed" />
        </Viewn>
      </Viewn>
    </Viewn>
  );
};

export default Content;
