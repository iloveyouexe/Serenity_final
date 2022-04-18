import React from "react";
import { NavLink } from "react-router-dom";
// import space from './assets/space2.jpg';
// import Logo from "./assets/Water_Drop.svg";
// import styles from '../App.module.css'

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "start",
        width: '100vw',
        // position: 'fixed',
        lineHeight: '2.5rem',
        fontSize: "22px",
        // fontWeight: "lighter",
        fontFamily: "courier new",
        // opacity: '0.5',
        // backgroundImage: `url(${space})`,
        backgroundImage: 'linear-gradient(to right, #DECBA4, #3E5151)',
        // background: "#2a2a2a",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      {/* <img src={Logo} alt="logo" /> */}

      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "white",
          textShadow: isActive ? "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff" : "none",          
          // boxShadow: isActive
          //   ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          //   : "none",
          // background: isActive ? "lightgrey" : "none",
          padding: isActive ? "5px" : "5px",
          margin: isActive ? "5px" : "5px",
          marginLeft: '5rem',
          // borderRadius: isActive ? "5px" : "none",
          textDecoration: isActive ? "none" : "none",
        })}
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Landing
      </NavLink>
      <NavLink
        to="/timer"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "white",
          textShadow: isActive ? "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff" : "none",          
          // boxShadow: isActive
          //   ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          //   : "none",
          // background: isActive ? "lightgrey" : "none",
          padding: isActive ? "5px" : "5px",
          margin: isActive ? "5px" : "5px",
          
          // borderRadius: isActive ? "5px" : "none",
          textDecoration: isActive ? "none" : "none",
        })}
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Timer
      </NavLink>

      <NavLink
        to="/breathing"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "white",
          textShadow: isActive ? "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff" : "none",    
          // boxShadow: isActive
          //   ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          //   : "none",
          // background: isActive ? "lightgrey" : "none",
          padding: isActive ? "5px" : "5px",
          margin: isActive ? "5px" : "5px",
          borderRadius: isActive ? "5px" : "none",
          textDecoration: isActive ? "none" : "none",
        })}
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Breathing
      </NavLink>

      <NavLink
        to="/articles"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "white",
          textShadow: isActive ? "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff" : "none",    
          // boxShadow: isActive
          //   ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          //   : "none",
          // background: isActive ? "lightgrey" : "none",
          padding: isActive ? "5px" : "5px",
          margin: isActive ? "5px" : "5px",
          borderRadius: isActive ? "5px" : "none",
          textDecoration: isActive ? "none" : "none",
        })}
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Articles
      </NavLink>

      <NavLink
        to="/chart"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "white",
          textShadow: isActive ? "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff" : "none",    
          // boxShadow: isActive
          //   ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          //   : "none",
          // background: isActive ? "lightgrey" : "none",
          padding: isActive ? "5px" : "5px",
          margin: isActive ? "5px" : "5px",
          borderRadius: isActive ? "5px" : "none",
          textDecoration: isActive ? "none" : "none",
        })}
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Chart
      </NavLink>

      <NavLink
        to="/users"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "white",
          textShadow: isActive ? "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff" : "none",    
          // boxShadow: isActive
          //   ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          //   : "none",
          // background: isActive ? "lightgrey" : "none",
          padding: isActive ? "5px" : "5px",
          margin: isActive ? "5px" : "5px",
          borderRadius: isActive ? "5px" : "none",
          textDecoration: isActive ? "none" : "none",
        })}
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Users
      </NavLink>
    </nav>
  );
};

export default Navbar;