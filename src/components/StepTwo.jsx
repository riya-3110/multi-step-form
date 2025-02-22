import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  address: yup.string().required("Address is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be in 10 digits"),
});

export const StepTwo = ({ formData, setFormData, nextStep, prevStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    nextStep();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <input {...register("address")} placeholder="Enter Address" />
      <p className="error-msg">{errors.address?.message}</p>

      <input {...register("phone")} placeholder="Enter Phone number" />
      <p className="error-msg">{errors.phone?.message}</p>

      <button type="button" onClick={prevStep}>
        Back
      </button>
      <button type="submit">Next</button>
    </form>
  );
};
