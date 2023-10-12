import { Icon } from ".";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    property1: {
      options: [
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
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "back-2",
    propertyClashClassName: {},
    shape: "/img/shape-2.svg",
  },
};
