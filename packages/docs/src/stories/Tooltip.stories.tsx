import type { Meta, StoryObj } from "@storybook/react";
import { Button, Tooltip, TooltipProps } from "@it-ignite-ui/react";

export default {
  title: "Data Display/Tooltip",
  component: Tooltip,
  args: {
    text: "A tooltip example",
    children: <Button>Hover-me</Button>,
  },
  argTypes: {},
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};

export const WithDelay: StoryObj<TooltipProps> = {
  args: {
    delay: 0,
  },
};
