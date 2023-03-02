import { FC, ReactNode } from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { Text } from "../Text";
import { TooltipContent } from "./styles";

export interface TooltipProps {
  children: ReactNode;
  text: string;
  delay?: number;
}

export const Tooltip: FC<TooltipProps> = ({ children, text, delay }) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={delay}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

        <RadixTooltip.Portal>
          <TooltipContent sideOffset={5} side="top">
            <Text size="sm">{text}</Text>

            <RadixTooltip.Arrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

Tooltip.displayName = "Tooltip";
