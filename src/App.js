import "bootstrap/dist/css/bootstrap.min.css";
import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";

function App() {
  const routing = useRoutes(Themeroutes);

  return <div>{routing}</div>;
}

export default App;
