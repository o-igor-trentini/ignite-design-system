import { FC, ReactNode } from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { Text } from "../Text";
import { TooltipArrow, TooltipContent } from "./styles";

export type TooltipPlacement = "top" | "bottom" | "right" | "left";

export interface TooltipProps {
  children: ReactNode;
  text: string;
  delay?: number;
  placement?: TooltipPlacement;
}

export const Tooltip: FC<TooltipProps> = ({
  children,
  text,
  delay = 250,
  placement = "top",
}) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={delay}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

        <RadixTooltip.Portal>
          <TooltipContent sideOffset={2} side={placement}>
            <Text size="sm">{text}</Text>

            <TooltipArrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

Tooltip.displayName = "Tooltip";
