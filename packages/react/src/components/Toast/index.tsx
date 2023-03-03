import {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import * as RadixToast from "@radix-ui/react-toast";
import {
  CloseIcon,
  ToastAction,
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from "./styles";
import { Text } from "../Text";
import { Heading } from "../Heading";

export type SwipeDirection = RadixToast.SwipeDirection;

export interface ToastRef {
  open: () => void;
}

export interface ToastProps {
  title?: string;
  description?: string;
  duration?: number;
  swipeDirection?: SwipeDirection;
}

const Component: ForwardRefRenderFunction<ToastRef, ToastProps> = (
  { title, description, duration, swipeDirection = "right" },
  ref
) => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);

  const handleClick = (): void => {
    setOpen(false);

    window.clearTimeout(timerRef.current);

    timerRef.current = window.setTimeout(() => {
      setOpen(true);
    }, 100);
  };

  useImperativeHandle(ref, () => ({ open: handleClick }), []);

  useEffect(() => clearTimeout(timerRef.current), []);

  return (
    <RadixToast.Provider swipeDirection={swipeDirection} duration={duration}>
      <ToastContainer open={open} onOpenChange={setOpen}>
        <ToastTitle>
          <Heading size="sm">{title}</Heading>
        </ToastTitle>

        <ToastDescription asChild>
          <Text size="sm">{description}</Text>
        </ToastDescription>

        <ToastAction asChild altText="Close">
          <CloseIcon weight="bold" />
        </ToastAction>
      </ToastContainer>

      <ToastViewport />
    </RadixToast.Provider>
  );
};

Component.displayName = "Toast";

export const Toast = forwardRef(Component);
