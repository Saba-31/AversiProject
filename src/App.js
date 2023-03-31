import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Catalog from "./components/Catalog";
import Clinics from "./components/Clinics";
import Pharmacy from "./components/Pharmacy";
// import Slider from "./components/Slider";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Medicaments from "./components/Medicaments";
import Cart from "./components/Cart";
import BuyPage from "./components/BuyPage";
import ProdDetails from "./components/ProdDetails";

function App() {
  const [cart, setCart] = useState([]);

  const cartQuantityHandler = (itemId, quantity) => {
    if (quantity === 0) {
      setCart(cart.filter((item) => item.id !== itemId));
    } else {
      const newCart = cart.map((item) => {
        if (itemId == item.id) {
          return { ...item, quantity };
        }
        return item;
      });

      setCart(newCart);
    }
  };

  const cartHandler = (item) => {
    const findItem = cart.find((cartItem) => cartItem.id === item.id);

    if (findItem) {
      const newCart = cart.map((item) => {
        if (item.id === findItem.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const sumHandler = () => {
    const totalHandler = cart.reduce(
      (partialSum, item) => partialSum + item.price * item.quantity,
      0
    );
    return totalHandler;
  };

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Home cart={cart} cartHandler={cartHandler} />}
          />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/Pharmacy" element={<Pharmacy />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Clinics" element={<Clinics />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/Medicaments"
            element={<Medicaments cartHandler={cartHandler} />}
          />
          <Route
            path="/Cart"
            element={
              <Cart
                cart={cart}
                cartQuantityHandler={cartQuantityHandler}
                sumHandler={sumHandler}
              />
            }
          />
          <Route path="/Buy" element={<BuyPage sumHandler={sumHandler} />} />
          <Route
            path="/ProdDetails/:id"
            element={
              <ProdDetails
                cart={cart}
                cartHandler={cartHandler}
                cartQuantityHandler={cartQuantityHandler}
              />
            }
          />
        </Routes>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
