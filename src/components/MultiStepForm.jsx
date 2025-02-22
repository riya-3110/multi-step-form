import React, { useEffect, useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";

export const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : { name: "", email: "", address: "", phone: "" };
  });

  useEffect(
    () => localStorage.setItem("formData", JSON.stringify(formData)),
    [formData]
  );

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div>
      <ProgressBar step={step} />

      {step === 1 && (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && <StepThree formData={formData} prevStep={prevStep} />}
    </div>
  );
};
