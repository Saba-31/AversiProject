import React from "react";
import "./ProductSlider.css";
import productSliderItem from "./productSliderItem";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { useNavigate } from "react-router-dom";

const ProductSliderCard = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="product-cards">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          // pagination={{clickable: true}}
          autoplay={{ delay: 3000 }}
        >
          {productSliderItem.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="product-card">
                  <img
                    src={item.medImg}
                    alt="med"
                    className="medImg"
                    onClick={() => {
                      navigate("/ProdDetails/" + item.id);
                    }}
                  />
                  <img src={item.icon} alt="heal icon" className="haal-icon" />

                  <h4 className="medTitle">{item.title}</h4>
                  <p className="medDescri">{item.descri}</p>

                  <div className="price-button">
                    <p className="medPrice">{item.price}</p>
                    <button className="cardBtn">{item.button}</button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSliderCard;
