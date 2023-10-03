import React from "react";
import { Button } from "./src/components/Button";
import { Event } from "./src/components/Event";
import { Search } from "./src/components/Search";
import { Tab } from "./src/components/Tab";
import { Logo } from "./src/icons/Logo";
import { Property1Notification } from "./src/icons/Property1Notification";
import "./style.css";
import { View } from "react-xnft";




const Content: React.FC = () => {
  console.log("start content");

  const handleButtonClick = (id: any) => {
    console.log("handlebutton");
    console.log(id);
    // setActiveButton(buttonIndex);
  };

  return (
    <View style={{
      alignItems: "center",
    display: "inlineFlex",
    flexDirection: "column",
    gap: "24px",
    position: "relative"
    }}>
      <View style={{
        alignItems: "center",
        backgroundColor: "#111827",
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderColor: "#2d3444",
        display: "inline-flex",
        flex: "0 0 auto",
        gap: "832px",
        padding: "12px 40px",
        position: "relative"
      }}>
        {/* <Logo style={{
          height: "35px",
          position: "relative",
          width: "217px",
        }} /> */}
        <View style={{
          alignItems: "center",
          display: "inline-flex",
          flex: "0 0 auto",
          gap: "48px",
          position: "relative",
        }}>
          <View style={{
            alignItems: "flex-start",
            display: "inline-flex",
            flex: "0 0 auto",
            gap: "32px",
            position: "relative",
          }}>
            <View style={{
              alignItems: "flex-start",
              display: "inline-flex",
              flex: "0 0 auto",
              flexDirection: "column",
              gap: "8px",
              position: "relative",
            }}>
              <View style={{
                color: "white",
                fontFamily: "16-semibold-font-family",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                letterSpacing: "0.1em",
                lineHeight: 1.5,
                textAlign: "center",
                whiteSpace: "nowrap",
                width: "-moz-fit-content",
                marginTop: "-1px",
                position: "relative",
              }}>Events</View>
              <img className="line-2" alt="Line" src="/img/line.svg" />
            </View>
            <View style={{
              color: "white",
              fontFamily: "16-semibold-font-family",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              letterSpacing: "0.1em",
              lineHeight: 1.5,
              textAlign: "center",
              whiteSpace: "nowrap",
              width: "-moz-fit-content",
              marginTop: "-1px",
              position: "relative",
            }}>Leaderboard</View>
          </View>
          <View style={{
            alignItems: "center",
            display: "inline-flex",
            flex: "0 0 auto",
            gap: "16px",
            position: "relative",
          }}>
            <Property1Notification className="icon-17" />
            <img className="pfp-2" alt="Pfp" src="/img/pfp-4.png" />
          </View>
        </View>
        <Search style={{left: "552px",
  position: "absolute",
  top: "12px",}} />
      </View>
      <View className="View-4">
        <View onClick={handleButtonClick} styles={{
          alignItems: "flex-end",
          alignSelf: "stretch",
          display: "flex",
          flex: "0 0 auto",
          flexDirection: "column",
          gap: "24px",
          position: "relative",
          width: "100%",
        }}>
          <Button property1="primary" text="Propose event" />
          <View style={{
             alignItems: "flex-start",
             alignSelf: "stretch",
             display: "flex",
             flex: "0 0 auto",
             flexDirection: "column",
             gap: "16px",
             position: "relative",
             width: "100%",
          }}>
            <View style={{
               alignItems: "flex-start",
               display: "inline-flex",
               flex: "0 0 auto",
               gap: "8px",
               position: "relative",
            }}>
              <Tab property1="active" />
              <Tab className="design-component-instance-node" property1="inactive" />
              <Tab className="design-component-instance-node" property1="inactive" text="Fortnite" />
              <Tab className="design-component-instance-node" property1="inactive" text="Clash Royale" />
            </View>
            <View style={{
               alignItems: "flex-start",
               display: "inline-flex",
               flex: "0 0 auto",
               gap: "8px",
               position: "relative",
            }}>
              <Tab className="design-component-instance-node" property1="active" text1="Proposed" />
              <Tab className="design-component-instance-node" property1="inactive" text="Upcoming" />
              <Tab className="design-component-instance-node" property1="inactive" text="Past" />
            </View>
          </View>
        </View>
        <View style={{
          alignItems: "flex-start",
          display: "inline-flex",
          flex: "0 0 auto",
          flexDirection: "column",
          gap: "16px",
          position: "relative",
        }}>
          <Event className="design-component-instance-node" device="desktop" type="proposed" />
          <Event className="design-component-instance-node" device="desktop" type="proposed" />
        </View>
      </View>
    </View>
  );

  
};

export default Content;
