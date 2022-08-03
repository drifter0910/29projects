import { Row, Col } from "antd";
import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
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
    {
      name: "Modal",
      link: "/project6",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2Fbe3b5557ddf6d34e54369f0a36fc169d%2F00ddf198%2FScreen_Shot_2020-04-20_at_9.11.56_AM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3D5d54a8d333a69b6a&w=1920&q=75",
    },
    {
      name: "Questions",
      link: "/project7",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F0791fc9af03d13005b8838af9c27b20c%2Fd72b4b6c%2FScreen_Shot_2020-04-17_at_3.46.14_PM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3D0eb7f27390b8aed7&w=1920&q=75",
    },
    {
      name: "Menu",
      link: "/project8",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F8907584d0d2517d17c61fbfc93fa72c7%2Fc7d36e50%2FScreenShot2022-07-21at10.44.16AM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3D29fc4379b5cc0dbf&w=1920&q=75",
    },
    {
      name: "Video",
      link: "/project9",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F6bfd0dc23e81b53006900633e7569ca1%2F475c48f4%2FScreen_Shot_2020-04-20_at_9.12.28_AM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3D40070281bd000edb&w=2048&q=75",
    },
    {
      name: "Scroll",
      link: "/project10",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F97115ace07d39ea61354845f74c911b6%2F521c4382%2FScreen_Shot_2020-04-20_at_9.20.30_AM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3Db88061e1b36b59a6&w=1920&q=75",
    },
    {
      name: "Tabs",
      link: "/project11",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F3d71a758aad83a749e92755f4d98fa99%2F98e9512a%2FScreen_Shot_2020-04-23_at_3.01.48_PM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3D0849abc437c97415&w=1920&q=75",
    },
    {
      name: "Countdown Timer",
      link: "/project12",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F5938941b7b4014064bc8bf56ce4d4046%2Fa4813ed3%2FScreen_Shot_2020-04-23_at_3.00.42_PM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3De649893882c2924c&w=1920&q=75",
    },
    {
      name: "Lorem ipsum",
      link: "/project13",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F5ba5493beb43898d2ac09dafa4ca4e72%2Fc51fcaa5%2FScreen_Shot_2020-04-23_at_4.47.02_PM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3D1caff622e2bdc147&w=1920&q=75",
    },
    {
      name: "Grocery Bud",
      link: "/project14",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F82c5753df625211b6c45693173222cd7%2F2a9e4092%2FScreen_Shot_2020-04-25_at_8.54.12_PM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3D7f6b6fe0cc849684&w=1920&q=75",
    },
    {
      name: "Slider",
      link: "/project15",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2Fdb6ee3efd495c9351eb5972f1017b727%2Fcfaf196d%2FScreen_Shot_2020-04-27_at_9.04.28_AM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3D0c042cd9d9ea7f50&w=1920&q=75",
    },
  ];
  const projectsArray2 = [
    {
      name: "Counter",
      link: "/project16",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F4aa780c6a5d4cd8a119ac19ae0861b0d%2F5a89b95e%2FScreenShot2022-02-20at3.21.01PM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3D0ec978c502819e3d&w=1920&q=75",
    },
    {
      name: "Gallery",
      link: "/project17",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2Ff825e05e76926146accf91e8990beb4c%2Fb0d8cfc6%2FScreenShot2022-02-20at3.26.27PM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3D7f754c47919c1c2b&w=1920&q=75",
    },
    {
      name: "Numbers",
      link: "/project18",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F71c29f543e214953f65fb9b2689f0473%2Ff41333b6%2FScreenShot2022-02-21at9.08.22AM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3D80972e619e3ce9e2&w=1920&q=75",
    },
    {
      name: "Dark Mode",
      link: "/project19",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2Fd5a43cd808d5eea7a5c47c11894ced76%2Faac90546%2FScreenShot2022-02-20at3.04.53PM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3Dabcca24b5f95b8fb&w=1920&q=75",
    },
    {
      name: "Filters",
      link: "/project20",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F69e9f7c23934982c6f33c228c640251f%2F83405f2c%2FScreenShot2022-02-19at4.10.44PM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3D7019bb8db72794c3&w=1920&q=75",
    },
    {
      name: "Dad Jokes",
      link: "/project21",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2Fad41c95ea7ed461115fbf923200a82cb%2F273418c0%2FScreenShot2022-02-21at2.42.06PM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3D6e689cad33a0ef78&w=1920&q=75",
    },
    {
      name: "Products",
      link: "/project22",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F6a0a19b2a2427dcd644e8334f4f417f6%2F17cb7b82%2FScreenShot2022-02-21at3.54.06PM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3D6312157c4fcd11ee&w=1920&q=75",
    },
    {
      name: "Random User",
      link: "/project23",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F19b84e49a5ab8c1d00c12318f9689870%2Fc7d17e27%2FScreen_Shot_2020-07-01_at_11.14.49_AM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3Dc8c6397aba9e9b6b&w=1920&q=75",
    },
    {
      name: "Cocktails",
      link: "/project24",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2Fd487fd44285a02f7baada1fc0a4e6b0c%2Fb173c9a1%2FScreen_Shot_2020-07-01_at_11.14.14_AM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3D66965a052a4986a7&w=1920&q=75",
    },
    {
      name: "Slider",
      link: "/project25",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F90b5a82549e737ea17b6a5ba379145ca%2F34a2585d%2FScreen_Shot_2020-07-28_at_5.54.38_PM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3Dabc39180ebc81cce&w=1920&q=75",
    },
    {
      name: "Stripe Submenus",
      link: "/project26",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2Ff83b13bfbb1c50d786485c03ddbb086f%2Fe9dff8b5%2Fcopy.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3D5ba09a0918dbeaf4&w=1920&q=75",
    },
    {
      name: "Pagination",
      link: "/project27",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F86e2316345e63e7159754a9eb49bf466%2F17a1e8c5%2FScreenShot2020-10-21at3.28.28PM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3Dd44fa62a81db457b&w=1920&q=75",
    },
    {
      name: "Wikipedia",
      link: "/project28",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F1222df7c972de7c4ec87a57734d7f86b%2F70ee03cb%2FScreenShot2022-02-22at1.05.43PM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3D7bd35bdfac981a9c&w=1920&q=75",
    },
    {
      name: "Comfy Store",
      link: "/project29",
      img: "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2F61588dca53a363c548f37b65ccdeedc6%2Fbbacc541%2FScreen_Shot_2020-08-13_at_8.49.11_AM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3D09b56850865a11a6&w=1920&q=75",
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
            is no exception. Solidify your knowledge of Javascript by creating these cool projects.
          </p>
          <button>JOIN THE COURSE</button>
        </div>
        <div className="home__hero-img">
          <img
            src={"https://www.vanillajavascriptprojects.com/_next/static/media/hero-2.cbb732ba.svg"}
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
                md={12}
                sm={12}
                key={project.name}
              >
                <Link to={`${project.link}`} target="_blank">
                  <img
                    style={{
                      width: "100%",
                      minHeight: "185px",
                      maxHeight: "185px",
                    }}
                    src={project.img}
                    alt=""
                  />
                  <h3 style={{ padding: "1rem", backgroundColor: "white" }}>{project.name}</h3>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className="home__projects">
        <div className="home__after">Course Exclusive</div>
        <div className="home__projects-list">
          <Row gutter={[32, 32]} style={{ maxWidth: "1140px", margin: "auto" }}>
            {projectsArray2.map((project) => (
              <Col
                className="home__card"
                style={{ cursor: "pointer" }}
                lg={8}
                md={12}
                sm={12}
                key={project.name}
              >
                <Link to={`${project.link}`} target="_blank">
                  <img
                    style={{
                      width: "100%",
                      minHeight: "185px",
                      maxHeight: "185px",
                    }}
                    src={project.img}
                    alt=""
                  />
                  <h3 style={{ padding: "1rem", backgroundColor: "white" }}>{project.name}</h3>
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
