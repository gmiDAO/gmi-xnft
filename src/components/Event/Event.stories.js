import { Event } from ".";

export default {
  title: "Components/Event",
  component: Event,
  argTypes: {
    type: {
      options: ["upcoming", "proposed", "past"],
      control: { type: "select" },
    },
    device: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "upcoming",
    device: "desktop",
    className: {},
  },
};
