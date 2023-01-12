import ThreeJs from "../components/ThreeJS";
import ColorPicker from "../components/ColorPicker";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getItem } from "../Data";
import LoadingBar from "../components/loadingBar";
import "./starter.css";

const Starter = () => {
  const [active, setActive] = useState(false);
  const [objectData, setObjectData] = useState([]);

  const [item, setItem] = useState(false);
  const [isObjectLoaded, setIsObjectLoaded] = useState(false);

  let { product_id } = useParams();

  const [partName, setPartName] = useState("");

  const handleActivePart = (e, f) => {
    if (e.object.name) {
      if (
        e.object.name.includes("sole_base") ||
        e.object.name.includes("sole_top")
      ) {
        setPartName("Sole Color");
        setActive(true);
        setObjectData({ current: e, object: f });
      } else if (e.object.name.includes("strap1")) {
        setPartName("Left Strap Color");
        setActive(true);
        setObjectData({ current: e, object: f });
      } else if (e.object.name.includes("strap2")) {
        setPartName("Right Strap Color");
        setActive(true);
        setObjectData({ current: e, object: f });
      } else if (e.object.name.includes("stud1")) {
        setPartName("Left Stud Color");
        setActive(true);
        setObjectData({ current: e, object: f });
      } else if (e.object.name.includes("stud2")) {
        setPartName("Right Stud Color");
        setActive(true);
        setObjectData({ current: e, object: f });
      }
    }
  };

  useEffect(() => {
    setItem(filterById(getItem, product_id));
  }, [item]);

  const handleObjectLoaded = (e) => {
    setIsObjectLoaded(e);
  };

  return (
    <>
      {product_id && item && (
        <Container fluid>
          <div style={{ width: "100%", height: "50vh", position: "relative" }}>
            {!isObjectLoaded && <LoadingBar />}

            <ThreeJs
              isActive={handleActivePart}
              data={item}
              handleObjectLoaded={handleObjectLoaded}
            />
          </div>

          <ColorPicker
            partName={partName}
            active={active}
            objectData={objectData}
            data={item}
          />
        </Container>
      )}
    </>
  );
};

export default Starter;

function filterById(jsonObject, id) {
  return jsonObject.filter(function (jsonObject) {
    return jsonObject["product_id"] == id;
  })[0];
}
