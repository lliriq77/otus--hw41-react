import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,

  argTypes: {
    disabled: { control: "boolean" },
    label: { control: "text" },
    onButtonClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: true,
  label: "Button",
};
