import { Label, MultiStepContainer, Step, Steps } from "./styles";
import { FC } from "react";

export interface MultiStepProps {
  size: number;
  currentStep?: number;
}

export const MultiStep: FC<MultiStepProps> = ({ size, currentStep = 1 }) => {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ "--steps-size": size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <Step key={step} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepContainer>
  );
};

MultiStep.displayName = "MultiStep";
