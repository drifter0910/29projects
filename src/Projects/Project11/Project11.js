import React, { useState } from "react";
import "./Project11.scss";
import { Row, Col } from "antd";
const Project11 = () => {
  const data = [
    {
      title: "History",
      desc: "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.",
    },
    {
      title: "Vision",
      desc: "Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.",
    },
    {
      title: "Goals",
      desc: "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.",
    },
  ];
  const [desc, setDesc] = useState([data[0]]);
  const [toggle, setToggle] = useState(0);
  const handleCategory = (title, index) => {
    const filterData = data.filter((filtered) => {
      return filtered.title === title;
    });
    setDesc(filterData);
    console.log(index);
    setToggle(index);
  };
  return (
    <div className="project11-wrapper">
      <div className="project11">
        <div className="project11__title">
          <h1 style={{ fontSize: "3rem" }}>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            aperiam!
          </p>
        </div>
        <Row gutter={[32, 32]} className="project11__desc">
          <Col lg={12} md={12} className="project11__desc-img">
            <img
              src="https://vannilla-js-basic-project-11-tabs.netlify.app/hero-bcg.jpeg"
              alt=""
            />
          </Col>
          <Col lg={12} md={12} className="project11__desc-content">
            <div className="project11__desc-category">
              {data &&
                data.map((category, index) => (
                  <div
                    key={category.title}
                    onClick={() => handleCategory(category.title, index)}
                    className={
                      toggle === index
                        ? "project11__desc-category-item active "
                        : "project11__desc-category-item"
                    }
                  >
                    {category.title}
                  </div>
                ))}
            </div>
            {desc?.map((data, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "1rem",
                  minHeight: "280px",
                }}
              >
                <div>
                  <h1>{data.title}</h1>
                  <p>{data.desc}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Project11;
