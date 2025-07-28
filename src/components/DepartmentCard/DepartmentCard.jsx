import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useState, useMemo, useCallback } from "react";
import "./DepartmentCard.css";
import React from "react";

function ModelViewer({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return useMemo(() => <primitive object={scene} />, [scene]);
}

// Preload model once
useGLTF.preload("/models/heartT.glb");

function DepartmentCard({ model, title, description }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => setHovered(false), []);

  return (
    <div
      className="department-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="model-container">
        <Canvas camera={{ position: [0, 0, 2.5] }} frameloop="demand">
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 2, 2]} />
          <Suspense fallback={null}>
            <ModelViewer modelPath={model} />
          </Suspense>
          <OrbitControls
            autoRotate
            autoRotateSpeed={5}
            enableZoom={false}
            enablePan={false}
            enableRotate={hovered}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
      <hr />
      <div className="model-cta-container">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default React.memo(DepartmentCard);
