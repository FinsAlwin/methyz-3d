import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const CameraController = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.enablePan = false;

    controls.rotateSpeed = 0.5;

    controls.minDistance = 4;
    controls.maxDistance = 8;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

export default CameraController;
