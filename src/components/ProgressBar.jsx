import React from "react";

export const ProgressBar = ({ step }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        marginBottom: "20px",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div
        style={{
          background: step >= 1 ? "green" : "gray",
          width: "100px",
          height: "10px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          position: "relative",
        }}
      >
        <span
          style={{
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            background: "yellow",
            padding: "5px",
            textAlign: "center",
            position: "absolute",
            bottom: "-7.995px",
          }}
        >
          1
        </span>
      </div>
      <div
        style={{
          background: step >= 2 ? "green" : "gray",
          width: "100px",
          height: "10px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          position: "relative",
        }}
      >
        <span
          style={{
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            background: "yellow",
            padding: "5px",
            textAlign: "center",
            position: "absolute",
            bottom: "-7.995px",
          }}
        >
          2
        </span>
      </div>
      <div
        style={{
          background: step === 3 ? "green" : "gray",
          width: "100px",
          height: "10px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          position: "relative",
        }}
      >
        <span
          style={{
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            background: "yellow",
            padding: "5px",
            textAlign: "center",
            position: "absolute",
            bottom: "-7.995px",
          }}
        >
          3
        </span>
      </div>
    </div>
  );
};
