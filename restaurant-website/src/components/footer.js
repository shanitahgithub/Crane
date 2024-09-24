import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Contact us</h3>
        <p>
          <Link to="/contact">palsfoodcourt@gmail.com</Link>
        </p>
        <p>
          <Link to="/contact">+256 753175000</Link>
        </p>
        <p>
          <Link to="/contact">+256 200 78 888</Link>
        </p>
      </div>
      <div className="footer-column">
        <h3>Pals'</h3>
        <p>For more information follow us on our social media platforms;</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/PalsFoodCourtskireka/">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/palzfoodcourtofficial_/">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-column">
        <h3>Open Hours</h3>
        <ul>
          <p>
            Sunday - Friday: <span>24hrs</span>
          </p>
          {/* <li>
            Monday <span>24hrs</span>
          </li>
          <li>
            Tuesday <span>24hrs</span>
          </li>
          <li>
            Wednesday <span>24hrs</span>
          </li>
          <li>
            Thursday <span>24hrs</span>
          </li>
          <li>
            Friday <span>24hrs</span>
          </li> */}
          <p>
            Saturday : <span>6pm-6am</span>
          </p>
        </ul>
      </div>
      <div className="our-menu">
        <h4>OUR MENU</h4>
        <ul>
          <li>
            <Link to={`/menu/breakfast?menu=${8}`}>Breakfast</Link>
          </li>
          <li>
            <Link to={`/menu/breakfast?menu=${9}`}>Lunch</Link>
          </li>
          <li>
            <Link to={`/menu/breakfast?menu=${10}`}>Fast Foods</Link>
          </li>
          <li>
            <Link to={`/menu/breakfast?menu=${12}`}>Pizza,Salads & Fruits</Link>
          </li>
          <li>
            <Link to={`/menu/breakfast?menu=${13}`}>Drinks</Link>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <marquee>
          Copyright ©2024 All rights reserved | @ Pals' Food Court{" "}
          <i className="fa fa-heart"></i>
        </marquee>
      </div>
    </footer>
  );
};

export default Footer;
