import React, { Component } from "react";
import "./Pharmacy.css";
import pharmacyAddress from "./pharmacyAddress";
import call from "../pharmacyImgs/call.png";
import clock from "../pharmacyImgs/clock.png";

export default function Pharmacy() {
  return (
    <div>
      <div className="pharm-header">
        <p className="main-title">აფთიაქები</p>
        <p className="sec-title">მთავარი / აფთიაქები</p>
      </div>

      <div className="section-2">
        <div className="section-2-title">
          <h2>მოძებნეთ რუკაზე:</h2>
          <div className="select-section">
            <p>ქალაქი</p>
            <select>
              <option value="" key="">
                თბილისი
              </option>
            </select>

            <p>უბანი</p>
            <select>
              <option value="" key="">
                ვაკე
              </option>
              <option value="" key="">
                საბურთალო
              </option>
              <option value="" key="">
                ისანი
              </option>
              <option value="" key="">
                სამგორი
              </option>
            </select>

            <button className="select-btn">ძებნა</button>

            <p>
              ძებნა <span className="select-span">მისამართის მიხედვით</span>
            </p>
          </div>
        </div>
      </div>

      <div className="section-3">
        <iframe
          width="1380"
          height="690"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=aversi%20aftiaqi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>

      <div className="scrollbar">
        {pharmacyAddress.map((item) => {
          return (
            <div key={item.id} className="scrollItems">
              <div className="pin">{item.pin}</div>
              <div className="address">
                <p>{item.pharmacyNum}</p>
                <p>{item.address}</p>
              </div>
              <div className="camera">{item.camImg}</div>
            </div>
          );
        })}
      </div>

      <div className="grafiki">
        <p>აფთიაქების მუშაობის გრაფიკი:</p>
        <div className="days">
          <div className="clock-day">
            <img src={clock} alt="clock" className="clock" />
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
}
