import type { Meta, StoryObj } from "@storybook/react";

import { Component1 } from "./Component1";

const meta = {
  title: "Components/Component1",
  component: Component1,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: String,
  },
} satisfies Meta<typeof Component1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "my-class",
  },
};
