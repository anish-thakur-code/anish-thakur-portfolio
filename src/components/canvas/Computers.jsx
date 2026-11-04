import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const getIsLowPowerViewport = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= 1024 || window.matchMedia("(max-width: 1024px)").matches;
};

const hasWebGLSupport = () => {
  if (typeof window === "undefined") return false;

  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (error) {
    return false;
  }
};

const FallbackVisual = () => (
  <div className='relative w-full h-full rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(145,94,255,0.45),_rgba(15,23,42,0.96)_58%,_rgba(2,6,23,1)_100%)] flex items-center justify-center overflow-hidden'>
    <div className='absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_50%)]' />
    <div className='relative z-10 text-center px-4'>
      <div className='text-[10px] uppercase tracking-[0.35em] text-violet-200/90'>Portfolio</div>
      <div className='mt-3 text-2xl sm:text-3xl font-bold text-white'>Anish Thakur</div>
      <div className='mt-2 text-sm text-slate-200'>Full Stack Developer</div>
    </div>
  </div>
);

const Computers = ({ isLowPower }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow={!isLowPower}
        shadow-mapSize={isLowPower ? 512 : 1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isLowPower ? 0.52 : 0.82}
        position={isLowPower ? [0, -1.8, -2.8] : [0, -1.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isLowPower, setIsLowPower] = useState(getIsLowPowerViewport);
  const [supportsWebGL, setSupportsWebGL] = useState(hasWebGLSupport);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const handleMediaQueryChange = (event) => setIsLowPower(event.matches);

    setIsLowPower(mediaQuery.matches);
    setSupportsWebGL(hasWebGLSupport());

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleMediaQueryChange);
      return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }

    mediaQuery.addListener(handleMediaQueryChange);
    return () => mediaQuery.removeListener(handleMediaQueryChange);
  }, []);

  if (isLowPower || !supportsWebGL) {
    return <FallbackVisual />;
  }

  return (
    <Canvas
      frameloop='always'
      shadows={!isLowPower}
      dpr={isLowPower ? [1, 1.25] : [1, 1.7]}
      camera={{ position: [20, 3, 5], fov: isLowPower ? 30 : 25 }}
      gl={{
        preserveDrawingBuffer: false,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ touchAction: "pan-y", width: "100%", height: "100%" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isLowPower={isLowPower} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload("/desktop_pc/scene.gltf");

export default ComputersCanvas;
