import { Tab } from ".";

export default {
  title: "Components/Tab",
  component: Tab,
  argTypes: {
    property1: {
      options: ["inactive", "active"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showIcon: false,
    property1: "inactive",
    className: {},
    text: "Clash Royale",
    text1: "All",
  },
};
