import { useState, useEffect } from "react";
import "./styles.css";
import CatItem from "./cateItem";
import Colors from "./colors";
import SoleColor from "./soleColor";
import SizeSelect from "./sizeSelect";

const ColorContainer = (props) => {
  const [active, setActive] = useState(props.isaActive);
  const [name, setName] = useState(props.partName);
  const [defaultModel, setDefaultModel] = useState("");

  const [activeCat1, setActiveCat1] = useState(false);
  const [activeCat2, setActiveCat2] = useState(true);
  const [activeCat3, setActiveCat3] = useState(false);

  const handleClose = () => {
    setActive(false);
  };

  useEffect(() => {
    setDefaultModel(props.data.products[0].slug);
    props.model(defaultModel);
  }, [defaultModel]);

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
    props.model(e);
  };

  const handleSoleSize = (e) => {
    console.log(e);
  };

  const handleStrapSize = (e) => {
    console.log(e);
  };

  return (
    <>
      <div className="colorbxFixedContainer">
        {name && (
          <div className="colorLeftContainer">
            <h4>{name}</h4>
          </div>
        )}

        <div className="colorRightContainer">
          <div className="modelCatContainer d-flex">
            {props.data.products.map((item, index) => (
              <>
                <CatItem
                  key={index}
                  title={item.name}
                  click={() => handleClickCat(item.slug)}
                />
              </>
            ))}

            <SizeSelect
              dataStrapSize={props.data.strap_size}
              dataSoleSize={props.data.sole_size}
              handleSoleSize={handleSoleSize}
              handleStrapSize={handleStrapSize}
            />
          </div>

          <div className="colorContainer">
            {name.includes("Sole") && (
              <>
                {props.data.sole_colors.map((item, index) => (
                  <SoleColor
                    key={index}
                    click={handleClick}
                    colorTop={item.primary_color}
                    colorBottom={item.secondary_color}
                  />
                ))}
              </>
            )}
            {name.includes("Strap") && (
              <>
                {props.data.colors.map((item, index) => (
                  <Colors key={index} click={handleClick} color={item.color} />
                ))}
              </>
            )}
            {name.includes("Stud") && (
              <>
                {props.data.colors.map((item, index) => (
                  <Colors key={index} click={handleClick} color={item.color} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ColorContainer;
