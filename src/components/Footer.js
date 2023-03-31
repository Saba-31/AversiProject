import React from "react";
import "./Footer.css";
import logo from "../footerImg/Group 368.png";
import cards from "../footerImg/Group 9.png";
import icon from "../footerImg/Group 106.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-items">
        <img src={logo} alt="logo" className="logo2" />
        <div className="lists">
          <h5>კომპანია</h5>
          <ul>
            <a href="/ჩვენს შესახებ">
              <li>ჩვენს შესახებ</li>
            </a>
            <a href="/სიახლეები">
              <li>სიახლეები</li>
            </a>
            <a href="/აფთიაქები">
              <li>აფთიაქები</li>
            </a>
            <a href="/კლინიკები">
              <li>კლინიკები</li>
            </a>
          </ul>
        </div>

        <div className="lists">
          <h5>ინფორმაცია</h5>
          <ul>
            <a href="/საბონუსე სისტემა">
              <li>საბონუსე სისტემა</li>
            </a>
            <a href="/მონაცემთა ბაზა">
              <li>მონაცემთა ბაზა</li>
            </a>
            <a href="/ფასების რეესტრი">
              <li>ფასების რეესტრი</li>
            </a>
          </ul>
        </div>

        <div className="lists">
          <h5>დახმარება</h5>
          <ul>
            <a href="/დაბრუნება">
              <li>დაბრუნება</li>
            </a>
            <a href="/შეკვეთის გაფორმება">
              <li>შეკვეთის გაფორმება</li>
            </a>
            <a href="/შეკვეთის გადახდა">
              <li>შეკვეთის გადახდა</li>
            </a>
            <a href="/მომსახურების წესები">
              <li>მომსახურების წესები</li>
            </a>
          </ul>
        </div>
        <button className="help-btn">
          <img src={icon} alt="" className="icon" /> <p>ონლაინ დახმარება</p>
        </button>
      </div>
      <div className="end-items">
        <img src={cards} alt="cards" />
        <p>© 2020 Aversi, LTD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
