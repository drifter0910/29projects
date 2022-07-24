import React, { useState } from "react";
import "./Project7.scss";
const Project7 = () => {
  const data = [
    {
      title: "Do You Accept All Major Credit Cards?",
      content:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
    },
    {
      title: "Do You Suppport Local Farmers?",
      content:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
    },
    {
      title: "Do You Use Organic Ingredients?",
      content:
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
    },
  ];
  const Question = (props) => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
      setToggle(!toggle);
    };
    return (
      <div className="project7__content">
        <div key={props.index} className="project7__content-card">
          <div className="project7__content-card-top">
            <h3>{props.title}</h3>
            <i
              onClick={handleClick}
              className={toggle ? "far fa-minus-square" : "far fa-plus-square"}
            ></i>
          </div>
          <div
            className={
              toggle
                ? "project7__content-card-bottom active"
                : "project7__content-card-bottom"
            }
          >
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="project7">
      <div className="project7__title">
        <h2>General Questions</h2>
      </div>
      {data.map((data, index) => (
        <Question key={index} title={data.title} content={data.content} />
      ))}
    </div>
  );
};

export default Project7;
