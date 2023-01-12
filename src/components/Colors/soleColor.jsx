import { useState, useEffect } from "react";
import { act } from "react-dom/test-utils";

const SoleColor = (props) => {
  const [active, setActive] = useState(props.isaActive);
  const handleOnclick = (e, f) => {
    props.click(e, f);
  };
  return (
    <>
      <div
        className="colorboxSoleContainer"
        onClick={() => handleOnclick(props.colorTop, props.colorBottom)}
      >
        <div
          className="colorboxSoleTop"
          style={{
            backgroundColor: `${props.colorTop}`,
          }}
        ></div>
        <div
          className="colorboxSoleBottom"
          style={{
            backgroundColor: `${props.colorBottom}`,
          }}
        ></div>
      </div>
    </>
  );
};

export default SoleColor;
