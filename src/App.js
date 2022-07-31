import "./App.scss";
import "antd/dist/antd.css";
import { Routes, Route } from "react-router-dom";
import { route } from "./context/RouteContext";
import Project29 from "./Projects/Project29/Project29";
import CartState from "./context/CartState";
import AllProduct from "./Projects/Project29/AllProduct";
import SingleProduct from "./Projects/Project29/SingleProduct";
import About from "./Projects/Project29/About";
function App() {
  return (
    <div className="App">
      <CartState>
        <Routes>
          {route.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          <Route path="/project29" element={<Project29 />} />
          <Route path="/project29/allproduct" element={<AllProduct />} />
          <Route path="/project29/about" element={<About />} />
          <Route path="/project29/:id" element={<SingleProduct />} />
        </Routes>
      </CartState>
    </div>
  );
}

export default App;
