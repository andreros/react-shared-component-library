import type { Meta, StoryObj } from "@storybook/react";

import { Component2 } from "./Component2";

const meta = {
  title: "Components/Component2",
  component: Component2,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: String,
  },
} satisfies Meta<typeof Component2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "my-class",
  },
};
