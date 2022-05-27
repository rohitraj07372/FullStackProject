import React from "react";
import companyLogo from "../assets/highr.png";
import abc from "../assets/ABC.png";
const NavBar = () => {
  return (
    <div className="navbar">
      <header className="Navbar">
        <div className="Toolbar">
          <div className="Logo">
            {" "}
            <span role="img" aria-label="logo">
              <img
                style={{ width: "14%", height: "auto", float: "left" }}
                src={abc}
                alt="company logo"
              />
            </span>{" "}
            <img
              style={{
                width: "10%",
                height: "auto",
                marginTop: "10px",
                marginRight: "125px",
              }}
              src={companyLogo}
              alt="company logo"
            />
          </div>
          <div className="Title">Invoice List</div>
        </div>
      </header>
    </div>
  );
};
export default NavBar;
