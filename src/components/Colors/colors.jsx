const Colors = (props) => {
  const handleOnclick = (e) => {
    props.click(e);
  };
  return (
    <div
      className="colorbox"
      style={{ backgroundColor: `${props.color}` }}
      onClick={() => handleOnclick(props.color)}
    ></div>
  );
};

export default Colors;
