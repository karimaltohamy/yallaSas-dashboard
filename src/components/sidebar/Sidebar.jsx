import React, { Fragment, useState } from "react";
import "./sidebar.scss";
import logo from "../../images/logo.png";
import { sidebarLinks } from "../../utils/data.jsx";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [openLinksList, setOpenLinksList] = useState(null);

  const toggleList = (index) => {
    if (openLinksList === index) {
      setOpenLinksList(null);
    } else {
      setOpenLinksList(index);
    }
  };

  return (
    <Fragment>
      <div className="overflow_sidebar"></div>
      <div className="sidebar">
        <div className="header_sidebar text-center">
          <img src={logo} alt="logo" loading="lazy" className="mx-auto" />
        </div>
        <div className="links">
          {sidebarLinks &&
            sidebarLinks.map((item, index) => {
              if (!item.linksList) {
                return (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "link_item active" : "link_item"
                    }
                    key={index}
                  >
                    <div className="text">
                      <div className="icon">{item.icon}</div>
                      <span>{item.title}</span>
                    </div>
                  </NavLink>
                );
              } else {
                return (
                  <div className="mini_list">
                    <div
                      className={`link_item ${
                        openLinksList === index ? "active" : ""
                      }`}
                      onClick={() => toggleList(index)}
                      key={index}
                    >
                      <div className="text">
                        <div className="icon">{item.icon}</div>
                        <span>{item.title}</span>
                      </div>
                      <i className="fa-solid fa-angle-right arrow"></i>
                    </div>
                    <ul
                      className={`list list1 ${
                        openLinksList === index ? "open" : ""
                      }`}
                    >
                      {item.linksList &&
                        item.linksList.map((link, i) => {
                          return (
                            <li key={i}>
                              <i className="fa-solid fa-minus"></i>
                              <NavLink
                                to={link.pathLink}
                                key={i}
                                className={({ isActive }) =>
                                  isActive ? "active" : ""
                                }
                              >
                                {link.titleLink}
                              </NavLink>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
