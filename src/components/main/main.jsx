import React from "react";
import { useState } from "react";
import example from "../../images/example.png";

const SwitchLamp = (props) => {
  return (
    <div className="switch-lamp-container">
      <div
        className="main-lamp"
        style={{
          opacity:
            props.index === "Home"
              ? "1"
              : `${
                  props.index === "About"
                    ? "0.8"
                    : `${
                        props.index === "Timing"
                          ? "0.6"
                          : `${props.index === "Courses" ? "0.4" : ""}`
                      }`
                }`,
        }}
      ></div>
      <div
        className="main-lamp"
        style={{
          opacity:
            props.index === "Home"
              ? "0.8"
              : `${
                  props.index === "About"
                    ? "1"
                    : `${
                        props.index === "Timing"
                          ? "0.8"
                          : `${props.index === "Courses" ? "0.6" : ""}`
                      }`
                }`,
        }}
      ></div>
      <div
        className="main-lamp"
        style={{
          opacity:
            props.index === "Home"
              ? "0.6"
              : `${
                  props.index === "About"
                    ? "0.8"
                    : `${
                        props.index === "Timing"
                          ? "1"
                          : `${props.index === "Courses" ? "0.8" : ""}`
                      }`
                }`,
        }}
      ></div>
      <div
        className="main-lamp"
        style={{
          opacity:
            props.index === "Home"
              ? "0.4"
              : `${
                  props.index === "About"
                    ? "0.6"
                    : `${
                        props.index === "Timing"
                          ? "0.8"
                          : `${props.index === "Courses" ? "1" : ""}`
                      }`
                }`,
        }}
      ></div>
    </div>
  );
};

const Main = () => {
  const [index, setIndex] = useState("Home");
  return (
    <div className="main-container">
      <section className="main-section-left">
        <div className="main-text-container">
          <h3 className="main-text">Lets</h3>
          <h1 className="main-header">E-Learning</h1>
          <h2 className="main-text">at your home</h2>
          <p className="main-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            lectus dui. Maecenas pellentesque nec velit vel faucibus.
          </p>
        </div>
        <div className="main-button-container">
          <div className="main-button">Apply now</div>
          <div className="main-button">Read more</div>
        </div>
        <div className="main-social-media">
          <div className="main-media"></div>
          <div className="main-media"></div>
          <div className="main-media"></div>
          <div className="main-media"></div>
        </div>
      </section>
      <section className="main-section-right">
        <div
          className="main-image"
          style={{ backgroundImage: `url(${example})` }}
        ></div>
        <SwitchLamp index={index} />
      </section>
    </div>
  );
};

export default Main;
