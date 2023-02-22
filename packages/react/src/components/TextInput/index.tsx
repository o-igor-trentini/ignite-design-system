import { ComponentProps, FC } from "react";
import { Input, Prefix, TextInputContainer } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

export const TextInput: FC<TextInputProps> = ({ prefix, ...props }) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}

      <Input {...props} />
    </TextInputContainer>
  );
};

TextInput.displayName = "TextInput";
