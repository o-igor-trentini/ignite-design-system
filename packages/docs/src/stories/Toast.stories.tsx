import type { Meta, StoryObj } from "@storybook/react";
import { Box, Button, Toast, ToastProps, ToastRef } from "@it-ignite-ui/react";
import { useRef } from "react";

export default {
  title: "Data Display/Toast",
  component: Toast,
  args: {
    title: "A title example",
    description: "A description example",
  },
  argTypes: {
    duration: {
      type: "number",
      defaultValue: 5000,
      description: "Tempo de duração do toast em tela",
    },
    swipeDirection: {
      defaultValue: "right",
      type: "string",
      control: {
        type: "radio",
        options: ["up", "down", "left", "right"],
      },
    },
    title: {
      type: "string",
      description: "Texto do título",
    },
    description: {
      type: "string",
      description: "Texto do conteúdo",
    },
  },
  decorators: [
    (Story, { args }) => {
      const toastRef = useRef<ToastRef>({} as ToastRef);

      const handleClick = (): void => toastRef.current.open();

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
          <Button onClick={handleClick}>Open</Button>

          {Story({ args: { ref: toastRef, ...args } })}
        </Box>
      );
    },
  ],
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};
