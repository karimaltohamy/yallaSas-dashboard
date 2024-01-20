import React from "react";
import "./navProfile.scss";
import { Link, NavLink } from "react-router-dom";

const NavProfile = ({ itemsNev }) => {
  console.log();
  return (
    <div className="nav_container">
      <div className="nav_profile">
        {itemsNev &&
          itemsNev.map((item, i) => (
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "item active" : "item")}
              key={i}
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default NavProfile;
