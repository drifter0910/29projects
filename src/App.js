import "./App.scss";
import "antd/dist/antd.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Projects/Home";
import Project1 from "./Projects/Project1/Project1";
import Project1Hex from "./Projects/Project1/Project1Hex";
import Project2 from "./Projects/Project2/Project2";
import Project3 from "./Projects/Project3/Project3";
import Project4 from "./Projects/Project4/Project4";
import Project5 from "./Projects/Project5/Project5";
import Project6 from "./Projects/Project6/Project6";
import Project7 from "./Projects/Project7/Project7";
import Project8 from "./Projects/Project8/Project8";
import Project9 from "./Projects/Project9/Project9";
import Project10 from "./Projects/Project10/Project10";
import Project11 from "./Projects/Project11/Project11";
import Project12 from "./Projects/Project12/Project12";
import Project13 from "./Projects/Project13/Project13";
import Project14 from "./Projects/Project14/Project14";
import Project15 from "./Projects/Project15/Project15";

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
        <Route path="/project7" element={<Project7 />} />
        <Route path="/project8" element={<Project8 />} />
        <Route path="/project9" element={<Project9 />} />
        <Route path="/project10" element={<Project10 />} />
        <Route path="/project11" element={<Project11 />} />
        <Route path="/project12" element={<Project12 />} />
        <Route path="/project13" element={<Project13 />} />
        <Route path="/project14" element={<Project14 />} />
        <Route path="/project15" element={<Project15 />} />
      </Routes>
    </div>
  );
}

export default App;
