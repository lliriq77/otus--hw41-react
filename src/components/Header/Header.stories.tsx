import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "./Header";

export default {
  title: "Header",
  component: Header,

  argTypes: {
    label: { control: "text" },
    onButtonClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Hello, SB",
};
