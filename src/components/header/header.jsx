import React from "react";
import { useContext } from "react";
import { CurrentNav } from "../../pages";

const Header = () => {
  const { item, setItem } = useContext(CurrentNav);

  return (
    <div className="header-container">
      <div className="header-logo"></div>
      <div className="header-navbar">
        <div className="header-navbar-text-container">
          <a
            href="#"
            className="header-navbar-text"
            style={{
              borderTop: item === "Home" ? "4px solid white" : "none",
            }}
            onClick={() => {
              setItem("Home");
            }}
          >
            <p className="text"> Home</p>
          </a>
          <a
            href="#"
            className="header-navbar-text"
            style={{ borderTop: item === "About" ? "4px solid white" : "none" }}
            onClick={() => {
              setItem("About");
            }}
          >
            <p className="text">About</p>
          </a>
          <a
            href="#"
            className="header-navbar-text"
            style={{
              borderTop: item === "Timing" ? "4px solid white" : "none",
            }}
            onClick={() => {
              setItem("Timing");
            }}
          >
            <p className="text">Timing</p>
          </a>
          <a
            href="#"
            className="header-navbar-text"
            style={{
              borderTop: item === "Courses" ? "4px solid white" : "none",
            }}
            onClick={() => {
              setItem("Courses");
            }}
          >
            <p className="text">Courses</p>
          </a>
        </div>
        <div className="header-search">
          <input
            type="text"
            placeholder="Search"
            className="header-search-input"
          />
          <div className="header-search-button"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
