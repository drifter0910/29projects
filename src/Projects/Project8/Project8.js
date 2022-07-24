import { Row, Col } from "antd";
import React, { useState } from "react";
import "./Project8.scss";
const Project8 = () => {
  const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "steak dinner",
      category: "dinner",
      price: 39.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  const [filterData, setFilterData] = useState(menu);
  const mapCategory = menu?.map((item) => {
    return item.category;
  });
  let unique = [...new Set(mapCategory)];
  const handleFilter = (item) => {
    const fill = menu.filter((data) => {
      return data.category === item;
    });
    setFilterData(fill);
  };
  const handleAll = () => {
    setFilterData(menu);
  };
  const ListItem = ({ menu }) => {
    return (
      <Row gutter={[16, 16]}>
        {menu &&
          menu.map((item, index) => (
            <Col key={index} lg={12} md={12}>
              <div className="project8__card">
                <div className="project8__card-img">
                  <img src={item.img} alt="" />
                </div>
                <div className="project8__card-desc">
                  <div className="project8__card-desc-top">
                    <h2>{item.title}</h2>
                    <span>${item.price}</span>
                  </div>
                  <p>{item.desc} </p>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    );
  };
  return (
    <div className="project8-wrapper">
      <div className="project8">
        <div className="project8__top">
          <div className="for-seperate">
            <h1>Our Menu</h1>
          </div>
          <div className="project8__menu">
            <h3 onClick={handleAll}>All</h3>
            {unique &&
              unique.map((item, index) => (
                <h3 key={index} onClick={() => handleFilter(item)}>
                  {item}
                </h3>
              ))}
          </div>
          <div className="project8__top-category"></div>
        </div>
        <div className="project8__bottom">
          <ListItem menu={filterData} />
        </div>
      </div>
    </div>
  );
};

export default Project8;
