import "./App.scss";
import "antd/dist/antd.css";
import { Routes, Route } from "react-router-dom";
import { route } from "./context/RouteContext";
import Project29 from "./Projects/Project29/Project29";
function App() {
  return (
    <div className="App">
      <Routes>
        {route.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="/project29" element={<Project29 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
