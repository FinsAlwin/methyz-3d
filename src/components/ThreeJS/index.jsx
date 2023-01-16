import { Canvas } from "@react-three/fiber";
import CameraController from "./CameraController";
import Scene from "./Scene";
import { useState } from "react";

const ThreeJs = (props) => {
  const handleActivePart = (e, f) => {
    props.isActive(e, f);
  };

  return (
    <Canvas camera={{ fov: 20 }}>
      <CameraController />
      <fog attach="fog" args={["white", 0, 40]} />

      <ambientLight intensity={0.2} />

      <directionalLight
        intensity={0.5}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        position={[0, 10, 0]}
      />

      <pointLight castShadow intensity={0.2} position={[0, 0.8, 0]} />
      <pointLight castShadow intensity={0.2} position={[0, 0, 0]} />
      <pointLight castShadow intensity={0.5} position={[0.9, 0.2, 0.3]} />
      <pointLight castShadow intensity={0.5} position={[-0.6, 0.2, -0.6]} />
      <pointLight castShadow intensity={0.2} position={[-0.6, 0, 0.6]} />

      <Scene
        handleActivePart={handleActivePart}
        data={props.data}
        isObjectLoaded={props.handleObjectLoaded}
        model={props.model}
      />
    </Canvas>
  );
};

export default ThreeJs;
