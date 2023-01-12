import { useState, useEffect } from "react";
import "./styles.css";
import CatItem from "./cateItem";
import Colors from "./colors";
import SoleColor from "./soleColor";

const PartColor = (props) => {
  const [active, setActive] = useState(props.isaActive);
  const [name, setName] = useState(props.partName);
  const [activeCat1, setActiveCat1] = useState(false);
  const [activeCat2, setActiveCat2] = useState(true);
  const [activeCat3, setActiveCat3] = useState(false);

  const handleClose = () => {
    setActive(false);
  };

  useEffect(() => {
    if (props.active) {
      setActive(true);
      setName(props.partName);
    }
  }, [props]);

  const handleClick = (e, f) => {
    if (props.objectData.current.object.name.includes("sole")) {
      props.objectData.object.materials.Sole_base_left.color.set(f);
      props.objectData.object.materials.Sole_base_right.color.set(f);

      props.objectData.object.materials.sole_top_left.color.set(e);
      props.objectData.object.materials.sole_top_right.color.set(e);

      props.handleColor({ name: "sole", color: e });
    } else {
      props.objectData.current.object.material.color.set(e);
      props.handleColor({
        name: props.objectData.current.object.name,
        color: e,
      });
    }
  };

  const handleClickCat = (e) => {
    if (e.includes("Kids Raaga")) {
      setActiveCat1(true);
      setActiveCat2(false);
      setActiveCat3(false);
    } else if (e.includes("Adults Raaga")) {
      setActiveCat1(false);
      setActiveCat2(true);
      setActiveCat3(false);
    } else if (e.includes("Adults Yoga")) {
      setActiveCat1(false);
      setActiveCat2(false);
      setActiveCat3(true);
    }
  };

  return (
    <>
      {active && (
        <div className="colorbxFixedContainer">
          <div className="colorLeftContainer">
            <h4>{name}</h4>
          </div>
          <div className="colorRightContainer">
            <div className="modelCatContainer d-flex">
              <CatItem
                title={"Kids Raaga"}
                click={() => handleClickCat("Kids Raaga")}
                isActive={activeCat1}
              />
              <CatItem
                title={"Adults Raaga"}
                click={() => handleClickCat("Adults Raaga")}
                isActive={activeCat2}
              />
              <CatItem
                title={"Adults Yoga"}
                click={() => handleClickCat("Adults Yoga")}
                isActive={activeCat3}
              />
            </div>
            <div className="colorContainer">
              {name.includes("Sole") && (
                <>
                  {props.data.colorPalet.sole.map((item, index) => (
                    <SoleColor
                      key={index}
                      click={handleClick}
                      colorTop={item.top}
                      colorBottom={item.bottom}
                    />
                  ))}
                </>
              )}
              {name.includes("Strap") && (
                <>
                  {props.data.colorPalet.strap.map((item, index) => (
                    <Colors
                      key={index}
                      click={handleClick}
                      color={item.color}
                    />
                  ))}
                </>
              )}
              {name.includes("Stud") && (
                <>
                  {props.data.colorPalet.strap.map((item, index) => (
                    <Colors
                      key={index}
                      click={handleClick}
                      color={item.color}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default PartColor;
