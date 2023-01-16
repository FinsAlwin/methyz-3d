const CatItem = (props) => {
  const handleClick = () => {
    props.click();
  };

  return (
    <>
      <span className="cateName" onClick={handleClick}>
        {props.title}
      </span>
    </>
  );
};

export default CatItem;
