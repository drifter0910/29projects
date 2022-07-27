import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Project22.scss";
import { Row, Col } from "antd";
const Project22 = () => {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      name: "High-Back Bench",
      price: 9.99,
      category: "Ikea",
      img: "https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg",
    },
    {
      id: 2,
      name: "Albany Table",
      price: 79.99,
      category: "Marcos",
      img: "https://dl.airtable.com/.attachments/f3450755e165557344f7d6433242431e/93533098/product-1.jpeg",
    },
    {
      id: 3,
      name: "Accent Chair",
      price: 25.99,
      category: "Caressa",

      img: "https://dl.airtable.com/.attachments/f292eaec4fea8a791b037c759ae559c9/2d5e34d5/product-4.jpeg",
    },
    {
      id: 4,
      name: "Wooden Table",
      category: "Caressa",
      price: 45.99,
      img: "https://dl.airtable.com/.attachments/5b3ad76dfd6ca5e31810cb99141c7ede/69829b2f/pexels-dominika-roseclay-1139785.jpg",
    },
    {
      id: 5,
      name: "Dining Table",
      category: "Caressa",
      price: 6.99,
      img: "https://dl.airtable.com/.attachments/06bbede65bd09196b4a81a8e7b59e683/8af0aeb5/product-8.jpg",
    },
    {
      id: 6,
      name: "Sofa Set",
      price: 69.99,
      category: "Lindy",

      img: "https://dl.airtable.com/.attachments/443aa7884207dae7c3cc127262a2f993/d4f33110/product-1.jpeg",
    },
    {
      id: 7,
      name: "Modern Bookshelf",
      price: 8.99,
      category: "Marcos",

      img: "https://dl.airtable.com/.attachments/a889b1928b134c2ca0b5bbca32ea9abf/65c8a9a6/product-7.jpg",
    },
    {
      id: 8,
      name: "Emperor Bed",
      category: "Lindy",
      price: 21.99,
      img: "https://dl.airtable.com/.attachments/10fdf29ae17f2d1f98770ae42584d021/82b9403f/product-6.jpg",
    },
    {
      id: 9,
      name: "Utopia Sofa",
      category: "Marcos",
      price: 39.95,
      img: "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
    },
    {
      id: 10,
      name: "Entertainment Center",
      category: "Lindy",
      price: 29.98,
      img: "https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg",
    },
    {
      id: 11,
      name: "Albany Sectional",
      price: 10.95,
      category: "Ikea",
      img: "https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg",
    },
    {
      id: 12,
      name: "Leather Sofa",
      category: "Lindy",
      price: 9.99,
      img: "https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg",
    },
  ];
  return (
    <div className="project20-wrapper">
      <div className="project20">
        <div className="project20__title">
          <h1>Our Products</h1>
        </div>
        <Row gutter={[16, 16]}>
          {data?.map((item) => (
            <Col
              key={item.name}
              className="project20__item"
              lg={8}
              md={12}
              xs={24}
            >
              <img
                onClick={() => navigate(`${item.id}`)}
                src={item.img}
                alt=""
              />
              <p>{item.name}</p>
              <h5>{item.price}</h5>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Project22;
