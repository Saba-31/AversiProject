import React from "react";
import "./Medicaments.css";
import arrow from "../images/arrow.png";
import arrow2 from "../images/arrow2.png";
import medicamentItems from "../components/medicamentItems";
import { useNavigate } from "react-router-dom";

const Medicaments = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="medicaments-head">
        <p className="med-first-title">წამლები</p>
        <p className="med-sec-title">მთავარი / კატალოგი / წამლები</p>
      </div>
      <div className="meicaments-containers">
        <div>
          <div>
            <div className="filter">
              <div className="filter-types">
                <p>გაფილტვრა</p>
                <img src={arrow} alt="arrow" />
              </div>
              <div className="filter-types">
                <p>ფასით</p>
                <img src={arrow} alt="arrow" />
              </div>
              <div className="filter-types">
                <p>დოზირებით</p>
                <img src={arrow} alt="arrow" />
              </div>
              <div className="filter-types">
                <p>გამოშვების ქვეყნით</p>
                <img src={arrow} alt="arrow" />
              </div>
              <div className="filter-types">
                <p>მრენდით</p>
                <img src={arrow} alt="arrow" />
              </div>
              <div className="filter-types">
                <p>მწარმოებლით</p>
                <img src={arrow} alt="arrow" />
              </div>
              <div className="filter-types">
                <p>შეფუთვის ფორმით</p>
                <img src={arrow} alt="arrow" />
              </div>
              <div className="filter-types">
                <p>ასაკის მიხედვით</p>
                <img src={arrow} alt="arrow" />
              </div>
              <div className="filter-types">
                <p>გაცემის ფორმის მიხედვით</p>
                <img src={arrow} alt="arrow" />
              </div>
            </div>

            <div className="filter-second-section">
              <p>გაიგე პირველმა რა აქციები არის ავერსში</p>
              <div className="mail-send">
                <input type="text" placeholder="თქვენი ელ-ფოსტა" />
                <button>
                  <img src={arrow2} alt="arrow2" className="arrow2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="sort">
            <p>სორტირება:</p>
            <select>
              <option>ბრენდის მიხედვით</option>
            </select>
          </div>

          <div className="medicament-cards">
            {medicamentItems.map((item) => {
              return (
                <div className="medicament-card" key={item.id} >
                  <div>
                    <img
                      src={item.icon}
                      alt="heal icon"
                      className="medic-card-heal-icon"
                    />
                  </div>
                  <div>
                    <img src={item.medImg} alt="med" className="medicImg"  onClick={() => {
                        navigate("/ProdDetails/" + item.id);
                      }} />
                  </div>

                  <h4 className="medicTitle">{item.title}</h4>
                  <p className="medicDescri">{item.descri}</p>

                  <div className="medic-price-button">
                    <p className="medicPrice">{item.price} ლარი</p>
                    <button
                      className="medic-cardBtn"
                      onClick={() => {
                        props.cartHandler({ ...item, quantity: 1 });
                        navigate("/Cart");
                      }}
                    >
                      {item.button}{" "}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicaments;
