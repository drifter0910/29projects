import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Project21.scss";
const Project21 = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        setData(response.data);
      });
  };
  const handleJoke = () => {
    fetchData();
  };
  return (
    <div className="project21">
      <div className="project21__content">
        <button onClick={handleJoke}>Random Dad Joke</button>
        <p>{data?.joke}</p>
      </div>
    </div>
  );
};

export default Project21;
