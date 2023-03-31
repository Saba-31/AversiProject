import React from "react";
import done from "../images/done.png";
import "./BuyPage.css";
import call from "../pharmacyImgs/call.png";
import clock from "../pharmacyImgs/clock.png";

const BuyPage = (props) => {
  return (
    <div className="buyPageBody">
      <div className="buyPageHead"></div>
      <div className="sold-content">
        <div className="icon-border">
          <img src={done} alt="" className="done-icon" />
        </div>
        <h1 className="sold-title">გადახდილია!</h1>
      </div>
      <p className="thx-sold">მადლობა, თქვენი გადახდა მიღებულია</p>
      <p className="pay-details-text">გადახდის დეტალები:</p>
      <div className="sold-details">
        <div className="payTotalPriceDetails">
          <p>ჯამური თანხა: </p>
          <span>{parseFloat(props.sumHandler()).toFixed(2)} ლარი</span>
        </div>
        <div className="payTotalPriceDetails2">
          <p>უნაღდო ანგარიშწორებით: </p>
          <span>{parseFloat(props.sumHandler()).toFixed(2)} ლარი</span>
        </div>
      </div>

      <div className="buy-page-grafiki">
        <p>აფთიაქების მუშაობის გრაფიკი:</p>
        <div className="days">
          <div className="clock-days">
            <img src={clock} alt="clock" className="clock-Icon" />
            <p> ორშ - პარ: 10:30 - 21:00 </p>
          </div>
          <p className="shabat-kvira">შაბ: 10:30 - 21:00</p>
          <p className="shabat-kvira">კვ: 10:30 - 21:00</p>
        </div>
        <div className="call">
          <p>დახმარებისთვის დაგვიკავშირდით:</p>
          <img src={call} alt="call" className="call-icon" />
          <p>2 900 800</p>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
