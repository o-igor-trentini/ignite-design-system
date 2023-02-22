import { Check } from "phosphor-react";
import { ComponentProps, FC } from "react";
import { CheckboxContainer, CheckboxIndicator } from "./styles";

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export const Checkbox: FC<CheckboxProps> = (props) => {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  );
};

Checkbox.displayName = "Checkbox";
