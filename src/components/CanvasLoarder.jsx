import { Html, useProgress } from "@react-three/drei";
import React from "react";

function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontSize: "1.2rem",
          color: "white",
          background: "rgba(0, 0, 0, 0.7)",
          padding: "10px 20px",
          borderRadius: "8px",
        }}
      >
        <p>Loading {progress.toFixed(2)}%</p>
      </div>
    </Html>
  );
}

export default CanvasLoader;
