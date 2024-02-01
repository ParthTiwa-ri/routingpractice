/* eslint-disable react/prop-types */

import "./Sidebar.css";
import { SidebarData } from "../../assets/data/data";
// import React from "react"; // Import React to use JSX

import Logo from "../../imgs/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [selected, setSelected] = useState(null);

  function handleClick(index) {
    setSelected(index);
  }
  return (
    <div className="sidebar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Sh<span>o</span>p
        </span>
      </div>

      {/* menu */}
      <div className="menu">
        {SidebarData.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            heading={item.heading}
            isActive={selected == index}
            route={item.route}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

function MenuItem({ icon: Icon, heading, isActive, route, onClick }) {
  return (
    <Link style={{ textDecoration: "none", color: "inherit" }} to={`/${route}`}>
      <div
        onClick={onClick}
        className={isActive ? "menuItem active" : "menuItem"}
      >
        <Icon /> {/* Render the icon component */}
        <span>{heading}</span>
      </div>
    </Link>
  );
}

export default Sidebar;
