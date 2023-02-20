import * as Avatar from "@radix-ui/react-avatar";
import { styled } from "../../styles";

export const AvatarContainer = styled(Avatar.Root, {
  width: "$12",
  height: "$12",
  display: "inline-block",
  borderRadius: "$full",
  overflow: "hidden",
});

export const AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "$full",
});

export const AvatarFallBack = styled(Avatar.Fallback, {});
