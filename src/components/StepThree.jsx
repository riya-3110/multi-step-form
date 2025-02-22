import React from "react";

export const StepThree = ({ formData, prevStep }) => {
  const handleSubmit = async () => {
    const response = await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Form submitted successfully.");
      localStorage.removeItem("formData");
    }
  };

  return (
    <div className="form-container info-container">
      <h3>Review Your Information</h3>
      <p className="info">Name : {formData.name}</p>
      <p className="info">Email : {formData.email}</p>
      <p className="info">Address : {formData.address}</p>
      <p className="info">Phone : {formData.phone}</p>

      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
