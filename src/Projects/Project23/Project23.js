import React, { useEffect, useState } from "react";
import "./Project23.scss";
import axios from "axios";
const Project23 = () => {
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState({});

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    await axios.get("https://randomuser.me/api/").then((res) => {
      let data = res.data.results;
      console.log(data);
      setDisplay({
        name: data[0].name.first + data[0].name.last,
        email: data[0].email,
        phone: data[0].phone,
        address: data[0].location.street.number + data[0].location.street.name,
        password: data[0].login.password,
        age: data[0].dob.age,
        image: data[0].picture.large,
      });
      setLoading(false);
    });
  };
  const handleClick = () => {
    fetchData();
  };
  const handleChange = (action) => {
    const p1 = document.querySelector(".p1");
    const p2 = document.querySelector(".p2");
    switch (action) {
      case "name":
        p1.textContent = "My name is";
        p2.textContent = `${display.name}`;
        break;
      case "email":
        p1.textContent = "My email is";
        p2.textContent = display.email;
        break;
      case "age":
        p1.textContent = "My age is";
        p2.textContent = display.age;
        break;
      case "street":
        p1.textContent = "My street is";
        p2.textContent = display.address;
        break;
      case "phone":
        p1.textContent = "My phone is";
        p2.textContent = display.phone;
        break;
      case "password":
        p1.textContent = "My password is";
        p2.textContent = display.password;
        break;
      default:
        break;
    }
  };
  return (
    <div className="project23">
      <div className="project23__content">
        {loading ? (
          <div style={{ textAlign: "center", marginTop: "30%" }}>Loading...</div>
        ) : (
          <div className="project23__card">
            <div className="project23__img-wrap">
              <img src={display.image} alt="" />
            </div>
            <div className="project23__desc">
              <p className="p1">My name is</p>
              <p className="p2">{`${display.name}`}</p>
            </div>
            <div className="project23__listbtn">
              <button onClick={() => handleChange("name")} className="project23__btn">
                <span className="far fa-user active"></span>
              </button>
              <button onClick={() => handleChange("email")} className="project23__btn">
                <span className="far fa-envelope-open"></span>
              </button>
              <button onClick={() => handleChange("age")} className="project23__btn">
                <span className="far fa-calendar-times"></span>
              </button>
              <button onClick={() => handleChange("street")} className="project23__btn">
                <span className="far fa-map"></span>
              </button>
              <button onClick={() => handleChange("phone")} className="project23__btn">
                <span className="fas fa-phone"></span>
              </button>
              <button onClick={() => handleChange("password")} className="project23__btn">
                <span className="fas fa-user-lock"></span>
              </button>
            </div>
            <div style={{ textAlign: "center" }}>
              <button onClick={handleClick} className="random">
                Random User
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project23;
