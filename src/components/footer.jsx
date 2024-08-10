import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-menu">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#academics">Academics</a>
        <a href="#infrastructure">Infrastructure</a>
        <a href="#alumni">Alumni</a>
        <a href="#vacancy">Vacancy</a>
        <a href="#transfer-certificate">Transfer Certificate</a>
      </div>
      <div className="footer-copyright">
        © Copyright 2024 Delhi Public School, Dwarka
      </div>
    </footer>
  );
};

export default Footer;
