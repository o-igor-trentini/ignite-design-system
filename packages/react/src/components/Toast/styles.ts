import * as RadixToast from "@radix-ui/react-toast";
import { keyframes, styled } from "../../styles";
import { X } from "phosphor-react";

const slideIn = keyframes({
  from: {
    transform: "translateY(-100%)",
  },
  to: {
    transform: "translateY(0)",
  },
});

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

export const ToastContainer = styled(RadixToast.Root, {
  padding: "$3 $5",

  display: "grid",
  gridTemplateAreas: "'title action' 'description action'",
  gridTemplateColumns: "auto max-content",
  gap: "$1",

  backgroundColor: "$gray800",
  border: "1px solid $gray600",
  borderRadius: "$sm",

  "[data-state='open']": {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  "[data-state='closed']": {
    animation: `${hide} 100ms ease-in`,
  },
});

export const ToastTitle = styled(RadixToast.Title, {
  gridArea: "title",
  fontWeight: "$bold",
  lineHeight: "$base",
});

export const ToastDescription = styled(RadixToast.Description, {
  gridArea: "description",
  fontWeight: "$regular",
  color: "$gray200",
});

export const ToastAction = styled(RadixToast.Action, {
  gridArea: "action",
  marginLeft: "$6",

  ":hover": {
    cursor: "pointer",
  },
});

export const ToastViewport = styled(RadixToast.Viewport, {
  maxWidth: "100vw",
  position: "fixed",
  margin: 0,
  zIndex: 2147483647,

  display: "flex",
  flexDirection: "column",
  bottom: 32,
  right: 32,

  listStyle: "none",
  outline: "none",
});

export const CloseIcon = styled(X, {
  fontSize: "xl",
  color: "$gray200",
});
