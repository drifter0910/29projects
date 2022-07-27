import React, { useState } from "react";
import "./Project19.scss";
const Project19 = () => {
  const [theme, setTheme] = useState(true);
  const data = [
    {
      title: "The WET Codbase",
      date: "October 4th, 2020 11 min read",
      content:
        "I'm baby ramps kombucha gluten-free ennui swag tattooed street art. Marfa biodiesel letterpress blue bottle subway tile, pop-up pok pok of.",
    },
    {
      title: "Goodby, Clean Code",
      date: "November 22nd, 2019 5 min read",
      content:
        "Biodiesel artisan seitan plaid sriracha copper mug venmo shabby chic. Kickstarter raclette kombucha, yr post-ironic jianbing try-hard flexitarian vaporware normcore.",
    },
    {
      title: "My Decade In Review",
      date: "August 11th, 2018 5 min read",
      content:
        "Direct trade shabby chic four dollar toast, tilde actually try-hard bicycle rights aesthetic forage. Meditation keytar asymmetrical tacos artisan truffaut. Pabst jean shorts roof party scenester.",
    },
    {
      title: "What Are The React Team Principles",
      date: "June 4th, 2015 5 min read",
      content:
        "Selvage street art hammock affogato VHS. Mustache shaman literally wayfarers schlitz. Direct trade four loko narwhal VHS pop-up, chartreuse trust fund typewriter street art swag thundercats art party.",
    },
  ];
  const Content = ({ data }) => {
    return data.map((item) => {
      return (
        <div className="project19__item">
          <h2>{item.title}</h2>
          <h5>{item.date}</h5>
          <p>{item.content}</p>
        </div>
      );
    });
  };
  return (
    <div className={theme ? "project19 light" : " project19 dark"}>
      <div className="project19__wrapper">
        <div className="project19__header">
          <h1>Overreacted</h1>
          <button onClick={() => setTheme(!theme)}>Toggle</button>
        </div>
        <div className="project19__content">
          <Content data={data} />
        </div>
      </div>
    </div>
  );
};

export default Project19;
