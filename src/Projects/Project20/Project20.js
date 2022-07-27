import React, { useEffect, useState } from "react";
import "./Project20.scss";
import { Row, Col } from "antd";
const Project20 = () => {
  const data = [
    {
      name: "High-Back Bench",
      price: 9.99,
      category: "Ikea",
      img: "https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg",
    },
    {
      name: "Albany Table",
      price: 79.99,
      category: "Marcos",
      img: "https://dl.airtable.com/.attachments/f3450755e165557344f7d6433242431e/93533098/product-1.jpeg",
    },
    {
      name: "Accent Chair",
      price: 25.99,
      category: "Caressa",

      img: "https://dl.airtable.com/.attachments/f292eaec4fea8a791b037c759ae559c9/2d5e34d5/product-4.jpeg",
    },
    {
      name: "Wooden Table",
      category: "Caressa",
      price: 45.99,
      img: "https://dl.airtable.com/.attachments/5b3ad76dfd6ca5e31810cb99141c7ede/69829b2f/pexels-dominika-roseclay-1139785.jpg",
    },
    {
      name: "Dining Table",
      category: "Caressa",
      price: 6.99,
      img: "https://dl.airtable.com/.attachments/06bbede65bd09196b4a81a8e7b59e683/8af0aeb5/product-8.jpg",
    },
    {
      name: "Sofa Set",
      price: 69.99,
      category: "Lindy",

      img: "https://dl.airtable.com/.attachments/443aa7884207dae7c3cc127262a2f993/d4f33110/product-1.jpeg",
    },
    {
      name: "Modern Bookshelf",
      price: 8.99,
      category: "Marcos",

      img: "https://dl.airtable.com/.attachments/a889b1928b134c2ca0b5bbca32ea9abf/65c8a9a6/product-7.jpg",
    },
    {
      name: "Emperor Bed",
      category: "Lindy",
      price: 21.99,
      img: "https://dl.airtable.com/.attachments/10fdf29ae17f2d1f98770ae42584d021/82b9403f/product-6.jpg",
    },
    {
      name: "Utopia Sofa",
      category: "Marcos",
      price: 39.95,
      img: "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
    },
    {
      name: "Entertainment Center",
      category: "Lindy",
      price: 29.98,
      img: "https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg",
    },
    {
      name: "Albany Sectional",
      price: 10.95,
      category: "Ikea",
      img: "https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg",
    },
    {
      name: "Leather Sofa",
      category: "Lindy",
      price: 9.99,
      img: "https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg",
    },
  ];
  const [filterData, setFilterData] = useState(data);
  const [input, setInput] = useState("");
  const mapCategory = data?.map((item) => {
    return item.category;
  });
  let unique = [...new Set(mapCategory)];
  const handleFilter = (item) => {
    const fill = data.filter((data) => {
      return data.category === item;
    });
    setFilterData(fill);
  };
  const handleAll = () => {
    setFilterData(data);
  };
  useEffect(() => {
    const result = data.filter((data) => {
      if (input === "") {
        return data;
      } else if (data.name.toLowerCase().includes(input.toLowerCase())) {
        return data;
      }
    });
    setFilterData(result);
  }, [input]);

  return (
    <div className="project20-wrapper">
      <div className="project20">
        <Row gutter={[16, 16]}>
          <Col lg={6} md={6} xs={24}>
            <div className="project20__left">
              <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="search..."
                value={input}
              />
              <div>
                <h2>Company</h2>
                <h3 onClick={handleAll}>All</h3>
                {unique.map((item) => (
                  <h3 onClick={() => handleFilter(item)}>{item}</h3>
                ))}
              </div>
            </div>
          </Col>
          <Col lg={18} md={18} xs={24}>
            <Row gutter={[16, 16]}>
              {filterData.length < 1
                ? "Sorry, no products matched your search"
                : undefined}
              {filterData?.map((item) => (
                <Col
                  key={item.name}
                  className="project20__item"
                  lg={8}
                  md={12}
                  xs={24}
                >
                  <img src={item.img} alt="" />
                  <p>{item.name}</p>
                  <h5>{item.price}</h5>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Project20;
