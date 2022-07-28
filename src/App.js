import "./App.scss";
import "antd/dist/antd.css";
import { Routes, Route } from "react-router-dom";
import { route } from "./context/RouteContext";
function App() {
  return (
    <div className="App">
      <Routes>
        {route.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
