import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    property1: {
      options: ["primary", "button-icon", "secondary", "tertiary"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showIcon: false,
    property1: "primary",
    text: "Place support",
    className: {},
    divClassName: {},
  },
};
