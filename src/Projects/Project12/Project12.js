import React, { useEffect, useRef, useState } from "react";
import "./Project12.scss";
import { Row, Col } from "antd";
const Project12 = () => {
  let interval = useRef();
  const [timer, setTimer] = useState({
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00",
  });
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const giveawayEnd = new Date("May 30, 2023 12:30:00");
  const countdownDate = giveawayEnd.getTime();
  const timeEnd = {
    day: weekdays[giveawayEnd.getDay()],
    month: months[giveawayEnd.getMonth()],
    date: giveawayEnd.getDate(),
    year: giveawayEnd.getFullYear(),
    hours: giveawayEnd.getHours(),
    minutes: giveawayEnd.getMinutes(),
    seconds: giveawayEnd.getSeconds(),
  };
  const startTimer = () => {
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimer({
          seconds,
          minutes,
          hours,
          days,
        });
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => clearInterval(interval.current);
  }, []);
  return (
    <div className="project12-wrapper">
      <div className="project12">
        <Row gutter={[32, 16]}>
          <Col lg={12} md={12}>
            <img
              className="project12__img"
              src="https://vannilla-js-basic-project-12-countdown.netlify.app/gift.jpeg"
              alt=""
            />
          </Col>
          <Col className="project12__right" lg={12} md={12}>
            <h1>OLD IPHONE GIVEAWAY</h1>
            <h3>
              Giveaway Ends On {timeEnd.day},
              {` ${timeEnd.date} ${timeEnd.month} ${timeEnd.year}  ${timeEnd.hours}:${timeEnd.minutes}:${timeEnd.seconds} am`}
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit molestiae cum libero atque ut voluptate qui
              consectetur aliquid incidunt voluptatem quos, dolore, non commodi
              quaerat aliquam eligendi, quisquam totam blanditiis.
            </p>
            <div className="project12__countdown">
              <div className="project12__day timer">
                {timer.days} <br /> <span>Days </span>
              </div>
              <div className="project12__hours timer">
                {timer.hours} <br /> <span>Hours</span>
              </div>
              <div className="project12__min timer">
                {timer.minutes} <br /> <span>Mins</span>
              </div>
              <div className="project12__sec timer">
                {timer.seconds} <br /> <span>Secs</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Project12;
