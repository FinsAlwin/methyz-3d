import Select from "react-select";

const SizeSelect = (props) => {
  const optionsStrap = [
    props.dataStrapSize.map((item) => {
      return {
        label: `${item.size} (${item.size_In_cm}${item.unit})`,
        value: item.size,
      };
    }),
  ];

  const optionsSole = [
    props.dataSoleSize.map((item) => {
      return {
        label: `${item.size} (${item.size_In_cm}${item.unit})`,
        value: item.size,
      };
    }),
  ];

  return (
    <div className="sizeContainer">
      <Select
        options={optionsStrap[0]}
        menuPlacement="top"
        width={200}
        placeholder={"Select strap size"}
      />
      &nbsp; &nbsp;
      <Select
        options={optionsSole[0]}
        menuPlacement="top"
        width={200}
        placeholder={"Select sole size"}
      />
    </div>
  );
};

export default SizeSelect;
