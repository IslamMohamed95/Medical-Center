import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { useModelResponsive } from "../../context/Resposive3DContext";
import { memo, Suspense } from "react";
import "./LogoViewer.css";

useGLTF.preload("/models/logo.glb");

const LogoModel = memo(({ scale, position }) => {
  const { scene } = useGLTF("/models/logo.glb");
  return <primitive object={scene} scale={scale} position={position} />;
});

function LogoViewer() {
  const { scale, position, htmlPosition } = useModelResponsive("logo");

  return (
    <div className="canvas-logo-wrapper">
      <Canvas
        className="scene-logo-canvas"
        shadows
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={1.4} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

        <Suspense fallback={null}>
          <LogoModel scale={scale} position={position} />
          <Html position={htmlPosition}>
            <div className="logo-content-container">
              <p>
                Aman <span>AlHayah</span>
              </p>
            </div>
          </Html>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}

export default memo(LogoViewer);
