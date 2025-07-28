import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, ContactShadows } from "@react-three/drei";
import { useModelResponsive } from "../../context/Resposive3DContext";
import { memo, Suspense, useRef, useEffect } from "react";
import "./HeartViewer.css";

useGLTF.preload("/models/heart.glb");

const HeartModel = memo(({ scale, position, onScaleChange }) => {
  const { scene } = useGLTF("/models/heart.glb");
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      const factor = 0.9 + Math.abs(Math.sin(time)) * 0.1;
      const s = Array.isArray(scale)
        ? scale.map((v) => v * factor)
        : [scale * factor, scale * factor, scale * factor];
      groupRef.current.scale.set(...s);

      if (onScaleChange) {
        const avgScale = s.reduce((a, b) => a + b, 0) / s.length;
        onScaleChange(avgScale);
      }
    }
  });

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = false;
      }
    });
  }, [scene]);

  return (
    <group ref={groupRef} position={position}>
      <primitive object={scene} />
    </group>
  );
});

function HeartViewer() {
  const { scale, position, shadowPosition } = useModelResponsive("heart");

  return (
    <div className="canvas-wrapper">
      <Canvas
        className="scene-canvas"
        shadows
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />

        <Suspense fallback={null}>
          <HeartModel scale={scale} position={position} />

          <ContactShadows
            position={shadowPosition || [0, -2.4, 0]} // fallback if undefined
            opacity={0.4}
            scale={10}
            blur={2.5}
            far={5}
          />
        </Suspense>

        <OrbitControls
          autoRotate
          enableZoom={false}
          enablePan={false}
          enableRotate
          rotateSpeed={0.9}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

export default memo(HeartViewer);
