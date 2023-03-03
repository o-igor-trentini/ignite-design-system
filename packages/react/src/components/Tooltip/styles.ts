import { styled } from "../../styles";
import * as RadixTooltip from "@radix-ui/react-tooltip";

export const TooltipContent = styled(RadixTooltip.Content, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "$2",

  padding: "$3 $4",

  fontWeight: "$medium",
  borderRadius: "$sm",
  backgroundColor: "$gray900",
  userSelect: "none",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
});

export const TooltipArrow = styled(RadixTooltip.Arrow, {
  fill: "$gray900",
});
