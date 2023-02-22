import { FC, ComponentProps } from "react";
import { AvatarContainer, AvatarFallBack, AvatarImage } from "./styles";
import { User } from "phosphor-react";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export const Avatar: FC<AvatarProps> = (props) => {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallBack delayMs={400}>
        <User />
      </AvatarFallBack>
    </AvatarContainer>
  );
};

Avatar.displayName = "Avatar";
