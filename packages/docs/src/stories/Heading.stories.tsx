import type { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "@it-ignite-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Custom Title",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["xxs", "xs", "sm", "md", "lg", "2xl", "4xl", "5xl", "6xl"],
      control: "inline-radio",
    },
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "Strong text",
    as: "h1",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Por padrão o `Heading` sempre será um `h2`, mas podemos alterar isso com a propriedade `as`",
      },
    },
  },
};
