import React from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const navigate = useNavigate();

  

  return (
    <div>
      <div className="cart-head">
        <p className="cart-first-title">კალათა</p>
        <p className="cart-sec-title">მთავარი / კალათა</p>
      </div>
      <div className="cartSections">
        <div>
          <div className="cart-prod-head">
            <p>პროდუქციის დასახელება</p>
            <p>ფასი</p>
            <p>რაოედნობა</p>
            <p>ჯამი</p>
          </div>

          <div>
            {props.cart.map((item) => (
              <div>
                <div key={item.id} className="cart-medicament-cards">
                  <div>
                    <img
                      src={item.medImg}
                      alt="medImg"
                      className="cart-card-img"
                    />
                  </div>
                  <div className="cart-card-title-descri">
                    <h4 className="cart-card-title">{item.title}</h4>
                    <p className="cart-card-descri">{item.descri}</p>
                  </div>
                  <div className="cart-card-price-container">
                    <span className="cart-card-price">{item.price} ლ</span>
                  </div>
                  <div className="cart-card-buttons">
                    <button
                      onClick={() =>
                        props.cartQuantityHandler(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className="cart-prod-quantity">{item.quantity}</span>
                    {/* cartHandler={cartHandler}  */}
                    <button
                      onClick={() =>
                        props.cartQuantityHandler(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-card-total-delete">
                    <span className="cart-card-total-price">
                      {parseFloat(item.price * item.quantity).toFixed(2)} ლ
                    </span>
                    <p
                      className="cart-card-delete"
                      onClick={() => props.cartQuantityHandler(item.id, 0)}
                    >
                      წაშლა
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="prod-total-prices">
          <div className="prodTotalPriceContent">
            <div>
              <div className="prodTotalPrice">
                <p className="totalProdTitle">პროდუქცია</p>
                <span className="cartTotalPrice">{parseFloat(props.sumHandler()).toFixed(2)} ლარი</span>
              </div>
              <div className="del-price-content">
                <p className="del-price-text">მიტანის საკომისიო</p>
                <p className='del-price'>0 ლარი</p>
              </div>
              <p className="vaucher">გაქვთ ვაუჩერი?</p>
              <div className="all-price-container">
                <p className="all-price-text">სულ</p>
                <span className="all-price">{parseFloat(props.sumHandler()).toFixed(2)} ლარი</span>
              </div>
              <button className="buy-btn"  onClick={() => {navigate("/Buy" )}} >ყიდვა</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
