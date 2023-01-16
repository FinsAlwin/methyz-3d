import ThreeJs from "../components/ThreeJS";
import Selector from "../components/Selector";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getproducts } from "../Data";
import LoadingBar from "../components/loadingBar";
import { ThreeDots, ProgressBar } from "react-loader-spinner";
import "./starter.css";

const Starter = () => {
  const [active, setActive] = useState(false);
  const [objectData, setObjectData] = useState([]);

  const [item, setItem] = useState(false);
  const [isObjectLoaded, setIsObjectLoaded] = useState(false);

  const [model, setModel] = useState("");

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
    fetch("https://methyztest.local/wp-json/mc/v1/init")
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, []);

  const handleObjectLoaded = (e) => {
    setIsObjectLoaded(e);
  };

  const handleModel = (e) => {
    setModel(filterBySlug(getproducts.products, e));
  };

  return (
    <>
      {!item && (
        <div style={{ width: "100%", height: "50vh", position: "relative" }}>
          <LoadingBar loading={ProgressBar} />
        </div>
      )}
      {item && (
        <Container fluid>
          <div style={{ width: "100%", height: "60vh", position: "relative" }}>
            {!isObjectLoaded && <LoadingBar loading={ThreeDots} />}

            <ThreeJs
              isActive={handleActivePart}
              data={item}
              handleObjectLoaded={handleObjectLoaded}
              model={model}
            />
          </div>

          <Selector
            partName={partName}
            active={active}
            objectData={objectData}
            data={item}
            model={handleModel}
          />
        </Container>
      )}
    </>
  );
};

export default Starter;

function filterBySlug(jsonObject, slug) {
  return jsonObject.filter(function (jsonObject) {
    return jsonObject["slug"] == slug;
  })[0];
}
