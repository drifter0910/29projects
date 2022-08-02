import { Row, Col } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Project27.scss";
import ReactPaginate from "react-paginate";
const Project27 = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 10;
  const pagesVisited = pageNumber * userPerPage;
  const displayUser = data
    .slice(pagesVisited, pagesVisited + userPerPage)
    .map((person, index) => {
      return (
        <Col key={index} lg={6}>
          <div className="project27__item">
            <img src={person.avatar_url} alt="" />
            <p>{person.login}</p>
            <button>
              <a target="_blank" rel="noreferrer" href={person.html_url}>
                VIEW PROFILE
              </a>
            </button>
          </div>
        </Col>
      );
    });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("https://api.github.com/users/john-smilga/followers?per_page=100", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        setData(res.data);
      });
  };
  const pageCount = Math.ceil(data.length / userPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="containerz">
      <h1>PAGINATION</h1>
      <div className="project27">
        <Row gutter={[16, 16]}>
          {displayUser}
          <ReactPaginate
            pageCount={pageCount}
            previousLabel={"Previous"}
            nextLabel={"Next"}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            activeClassName={"btnActive"}
            nextLinkClassName={"nextBttn"}
          />
        </Row>
      </div>
    </div>
  );
};

export default Project27;
