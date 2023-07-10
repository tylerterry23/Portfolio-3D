import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { AnimationMixer } from 'three';

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene, animations } = useGLTF("./robot_arm/scene.gltf");
  const mixer = useRef();
  const actions = useRef({});

  useEffect(() => {
    mixer.current = new AnimationMixer(scene);
    animations.forEach((clip) => {
      actions.current[clip.name] = mixer.current.clipAction(clip);
    });

    // Play all animations
    for (let action in actions.current) {
      actions.current[action].play();
    }
  }, [scene, animations]);

  useFrame((state, delta) => mixer.current && mixer.current.update(delta));

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-10, 25, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.0028 : 0.0055}
        position={isMobile ? [0, -2, 0] : [0, -3.40, 0]}
        rotation={isMobile ? [0, 2.3, 0] :  [0, 2.5, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always'  // Changed from 'demand' to 'always'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          className='cursor-pointer'
        />
        <Computers isMobile={isMobile} />
      </Suspense>
  
      <Preload all />
    </Canvas>
  );
  
};

export default ComputersCanvas;
