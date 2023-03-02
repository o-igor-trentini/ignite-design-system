import { styled } from "../../styles";
import * as RadixTooltip from "@radix-ui/react-tooltip";

export const TooltipContent = styled(RadixTooltip.Content, {
  borderRadius: 4,
  padding: "10 15",
  fontSize: 15,
  lineHeight: 1,
  color: "var(--violet11)",
  backgroundColor: "white",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  userSelect: "none",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
});
