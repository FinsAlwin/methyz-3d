const CatItem = (props) => {
  const handleClick = () => {
    props.click();
  };

  return (
    <>
      <span
        className="cateName"
        onClick={handleClick}
        style={{ textDecoration: `${props.isActive ? "underline" : "none"}` }}
      >
        {props.title}
      </span>
    </>
  );
};

export default CatItem;
