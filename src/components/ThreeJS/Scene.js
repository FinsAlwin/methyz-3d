import { useState, useEffect, useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gltfModel from "../../models/Methiyadi_v17.gltf";
import Box from "./Box";

const Scene = (props) => {
  const boxRef = useRef();

  useFrame(() => (boxRef.current.rotation.y += 0.001));

  const [ready, setReady] = useState(false);
  const [isObjectLoaded, setIsObjectLoaded] = useState(false);

  const [clicked, setClicked] = useState("");

  const [color, setColor] = useState("#F8F9F9");

  const [defaultColorSole, setDefaultColorSole] = useState("");

  const [defaultColorStudLH, setDefaultColorStudLH] = useState("");
  const [defaultColorStudRH, setDefaultColorStudRH] = useState("");

  const [defaultColorStrapLH, setDefaultColorStrapLH] = useState("");
  const [defaultColorStrapRH, setDefaultColorStrapRH] = useState("");

  const gltf = useLoader(GLTFLoader, gltfModel);

  useEffect(() => {
    setDefaultColors();

    if (gltf) {
      props.isObjectLoaded(true);
    }
  }, [ready]);

  const handleClick = (e) => {
    timeOutFunction(e);

    if (
      e.object.name.includes("sole_top1_left") ||
      e.object.name.includes("sole_base1_left") ||
      e.object.name.includes("sole_top2_right") ||
      e.object.name.includes("sole_base2_right")
    ) {
      props.handleActivePart(e, gltf);
      setClicked(e.object.name);

      gltf.materials.Sole_base_left.color.set(color);
      gltf.materials.sole_top_left.color.set(color);

      gltf.materials.Sole_base_right.color.set(color);
      gltf.materials.sole_top_right.color.set(color);
    }

    if (e.object.name.includes("stud1_left")) {
      e.object.material.color.set(color);
      props.handleActivePart(e, gltf);
      setClicked(e.object.name);
    }

    if (e.object.name.includes("stud2_right")) {
      e.object.material.color.set(color);
      props.handleActivePart(e, gltf);
      setClicked(e.object.name);
    }

    if (e.object.name.includes("strap1_left")) {
      e.object.material.color.set(color);
      props.handleActivePart(e, gltf);
      setClicked(e.object.name);
    }

    if (e.object.name.includes("strap2_right")) {
      e.object.material.color.set(color);
      props.handleActivePart(e, gltf);
      setClicked(e.object.name);
    }
  };

  const timeOutFunction = (e) => {
    setTimeout(() => {
      if (
        e.object.name.includes("sole_top1_left") ||
        e.object.name.includes("sole_base1_left") ||
        e.object.name.includes("sole_top2_right") ||
        e.object.name.includes("sole_base2_right")
      ) {
        gltf.materials.Sole_base_left.color.set(defaultColorSole);
        gltf.materials.sole_top_left.color.set(defaultColorSole);

        gltf.materials.Sole_base_right.color.set(defaultColorSole);
        gltf.materials.sole_top_right.color.set(defaultColorSole);
      }

      if (e.object.name.includes("stud1_left")) {
        e.object.material.color.set(defaultColorStudLH);
      }

      if (e.object.name.includes("stud2_right")) {
        e.object.material.color.set(defaultColorStudLH);
      }

      if (e.object.name.includes("strap1_left")) {
        e.object.material.color.set(defaultColorStrapLH);
      }
      if (e.object.name.includes("strap2_right")) {
        e.object.material.color.set(defaultColorStrapRH);
      }
    }, 300);
  };

  const setDefaultColors = async () => {
    await gltf.materials.Sole_base_left.color.set(props.data.defaultColor.sole);
    await gltf.materials.Sole_base_right.color.set(
      props.data.defaultColor.sole
    );
    await gltf.materials.sole_top_left.color.set(props.data.defaultColor.sole);
    await gltf.materials.sole_top_right.color.set(props.data.defaultColor.sole);

    await gltf.materials.strap_left.color.set(props.data.defaultColor.strapLH);
    await gltf.materials.strap_right.color.set(props.data.defaultColor.strapLH);

    await gltf.materials.Stud_left.color.set(props.data.defaultColor.studLH);
    await gltf.materials.stud_right.color.set(props.data.defaultColor.studLH);

    await setDefaultColorSole(props.data.defaultColor.sole);

    await setDefaultColorStudLH(props.data.defaultColor.sole);
    await setDefaultColorStudRH(props.data.defaultColor.sole);

    await setDefaultColorStrapLH(props.data.defaultColor.sole);
    await setDefaultColorStrapRH(props.data.defaultColor.sole);

    setReady(true);
  };

  return (
    <>
      <group>
        <mesh
          castShadow
          position={[0, -0.2, 0]}
          scale={[0.05, 0.05, 0.05]}
          rotation={[0, 2.5, 0]}
          ref={boxRef}
          onClick={(e) => {
            e.stopPropagation();
            handleClick(e);
          }}
        >
          <primitive object={gltf.scene} />
        </mesh>
      </group>
    </>
  );
};

export default Scene;
