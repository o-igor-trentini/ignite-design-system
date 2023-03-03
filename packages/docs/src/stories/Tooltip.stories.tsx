import type { Meta, StoryObj } from "@storybook/react";
import { Box, Button, Tooltip, TooltipProps } from "@it-ignite-ui/react";

export default {
  title: "Data Display/Tooltip",
  component: Tooltip,
  args: {
    text: "A tooltip example",
    children: <Button>Hover-me</Button>,
  },
  argTypes: {
    placement: {
      defaultValue: "top",
      type: "string",
      description: "Posição do tooltip",
      control: {
        type: "radio",
        options: ["top", "bottom", "right", "left"],
      },
    },
    delay: {
      type: "number",
      description: "Quantidade de ms para aparecer o tooltip",
      defaultValue: 250,
    },
    text: {
      type: "string",
      description: "Conteúdo",
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "$2",
            padding: "$10",
          }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};

export const WithDelay: StoryObj<TooltipProps> = {
  args: {
    delay: 0,
  },
};

export const Placement: StoryObj<TooltipProps> = {
  args: {
    placement: "right",
  },
};
