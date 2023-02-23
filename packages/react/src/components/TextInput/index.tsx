import {
  ComponentProps,
  ElementRef,
  forwardRef,
  ForwardRefExoticComponent,
} from "react";
import { Input, Prefix, TextInputContainer } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

export const TextInput: ForwardRefExoticComponent<TextInputProps> = forwardRef<
  ElementRef<typeof Input>,
  TextInputProps
>(({ prefix, ...props }, ref) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}

      <Input ref={ref} {...props} />
    </TextInputContainer>
  );
});

TextInput.displayName = "TextInput";
