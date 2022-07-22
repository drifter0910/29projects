import "./App.scss";
import "antd/dist/antd.css";
import Home from "./Projects/Home";
import Project1 from "./Projects/Project1/Project1";
import Project1Hex from "./Projects/Project1/Project1Hex";
import Project2 from "./Projects/Project2/Project2";
import Project3 from "./Projects/Project3/Project3";
import { Routes, Route } from "react-router-dom";
import Project4 from "./Projects/Project4/Project4";
import Project5 from "./Projects/Project5/Project5";
import Project6 from "./Projects/Project6/Project6";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project1/hex" element={<Project1Hex />} />

        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
        <Route path="/project5" element={<Project5 />} />
        <Route path="/project6" element={<Project6 />} />
      </Routes>
    </div>
  );
}

export default App;
