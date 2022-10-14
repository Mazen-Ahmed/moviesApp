import { useRoutes } from "react-router-dom";
import Routers from "router";
import Main from "layouts/main";
import "./App.css";

function App() {
  const routing = useRoutes(Routers);

  return (
    <div className="App">
      <Main>{routing}</Main>
    </div>
  );
}

export default App;
