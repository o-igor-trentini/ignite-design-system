import { ComponentProps, FC } from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

export const Tooltip: FC = () => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger />
        <RadixTooltip.Portal>
          <RadixTooltip.Content>
            <RadixTooltip.Arrow />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export interface TooltipProps extends ComponentProps<typeof Tooltip> {}

Tooltip.displayName = "Tooltip";
