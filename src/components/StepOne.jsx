import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name is at least more than 2 character long"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
});

export const StepOne = ({ formData, setFormData, nextStep }) => {
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
      <input {...register("name")} placeholder="Enter name" />
      <p className="error-msg">{errors.name?.message}</p>

      <input {...register("email")} placeholder="Enter Email" />
      <p className="error-msg">{errors.email?.message}</p>

      <button type="submit">Next</button>
    </form>
  );
};
