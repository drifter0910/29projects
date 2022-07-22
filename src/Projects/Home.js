import { Row, Col } from "antd";
import React from "react";
import "./Home.scss";
import { useNavigate, Link } from "react-router-dom";
const Home = () => {
  const projectsArray = [
    {
      name: "Color Flipper",
      link: "/project1",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2Fa339b9249dc2cce4b4c1fb4738a7a23c%2F8cee7da4%2FScreen_Shot_2020-04-13_at_8.57.42_PM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3Df71dc75c7f19f0f6&w=3840&q=75",
    },
    {
      name: "Simple Counter",
      link: "/project2",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F9cb5163aaf8ff749cbf3560af494db8a%2F268c6e2e%2FScreen_Shot_2020-04-13_at_8.57.50_PM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3Dc968d17a47fe9a87&w=3840&q=75",
    },
    {
      name: "Reviews/ Quotes",
      link: "/project3",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F760739e91d9405502e525ca17a257f64%2Ffb928df5%2FScreen_Shot_2020-04-14_at_2.26.45_PM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3Da84522d491998776&w=3840&q=75",
    },
    {
      name: "Navbar",
      link: "/project4",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F07af8f8b33741f873854fdcb82b73aaa%2Ff6f447aa%2FScreen_Shot_2020-04-16_at_9.22.01_AM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3Dc3d4ddc0daefe77e&w=3840&q=75",
    },
    {
      name: "Sidebar",
      link: "/project5",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F0e5b14b0c1a3219c5121e01bac417d6b%2F63f224e5%2FScreen_Shot_2020-04-15_at_4.32.01_PM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3D41bc98727a6d2e23&w=2048&q=75",
    },
  ];
  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__hero-desc">
          <h1>Javacript Projects</h1>
          <p style={{ fontSize: "1.3rem" }}>
            Projects are the most practical way to learn any language, and{" "}
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                textDecoration: "underline",
                textDecorationColor: "yellow",
                fontStyle: "italic",
                letterSpacing: "4px",
              }}
            >
              Javascript
            </span>{" "}
            is no exception. Solidify your knowledge of Javascript by creating
            these cool projects.
          </p>
          <button>JOIN THE COURSE</button>
        </div>
        <div className="home__hero-img">
          <img
            src={
              "https://www.vanillajavascriptprojects.com/_next/static/media/hero-2.cbb732ba.svg"
            }
            alt=""
          />
        </div>
      </div>
      <div className="home__projects">
        <div className="home__after">DOM Projects</div>
        <div className="home__projects-list">
          <Row gutter={[32, 32]} style={{ maxWidth: "1140px", margin: "auto" }}>
            {projectsArray.map((project) => (
              <Col
                className="home__card"
                style={{ cursor: "pointer" }}
                lg={8}
                md={16}
                sm={24}
              >
                <Link to={`${project.link}`} target="_blank">
                  <img
                    style={{ width: "100%", maxHeight: "185px" }}
                    src={project.img}
                    alt=""
                  />
                  <h3 style={{ padding: "1rem", backgroundColor: "white" }}>
                    {project.name}
                  </h3>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
