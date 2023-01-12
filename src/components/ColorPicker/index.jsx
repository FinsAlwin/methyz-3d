import "./styles.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Part from "../Colors";
import { useEffect, useState } from "react";
const ColorPicker = (props) => {
  const [colorSole, setColorSole] = useState("");
  const [colorStudLH, setColorStudLH] = useState("");
  const [colorStudRH, setColorStudRH] = useState("");
  const [colorStrapLH, setColorStrapLH] = useState("");
  const [colorStrapRH, setColorStrapRH] = useState("");

  const handleColor = (e) => {
    if (e.name.includes("sole")) {
      setColorSole(e.color);
    } else if (e.name.includes("stud1")) {
      setColorStudLH(e.color);
    } else if (e.name.includes("stud2")) {
      setColorStudRH(e.color);
    } else if (e.name.includes("strap1")) {
      setColorStrapLH(e.color);
    } else if (e.name.includes("strap2")) {
      setColorStrapRH(e.color);
    }
  };
  return (
    <>
      <Part
        active={props.active}
        partName={props.partName}
        objectData={props.objectData}
        handleColor={handleColor}
        data={props.data}
      />
    </>
  );
};

export default ColorPicker;
