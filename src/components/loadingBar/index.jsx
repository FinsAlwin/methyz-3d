import "./styles.css";

import { ThreeDots } from "react-loader-spinner";

const LoadingBar = () => {
  return (
    <div className="loadingBarContainer">
      <ThreeDots
        height="80"
        width="80"
        radius="10"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};

export default LoadingBar;
