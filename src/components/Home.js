import React from "react";
import "../components/Home.css";
import Slider from "./Slider";
import Cards from "./Cards";
import ProductSliderCard from "./ProductSliderCard";
import AqciebiSlider from "./AqciebiSlider";
import ProductCatalog from "./ProductCatalog";
import MobAplikations from "./MobAplikations";

export default function Home(props) {
  return (
    <div>
      <div>
        <Slider />
      </div>

      <div>
        <Cards />
      </div>

      <div>
        <h3>ლიდერები გაყიდვაში</h3>
        <ProductSliderCard cartHandler={props.cartHandler} />
      </div>

      <div className="aqciebi">
        <h3>მიმდინარე აქციები</h3>
        <h3 className="yvela-aqcia">ყველა აქცია</h3>
      </div>

      <div>
        <AqciebiSlider />
      </div>

      <div>
        <h3 className="product-catalog">პროდუქციის კატალოგი</h3>
        <ProductCatalog />
      </div>

      <div>
        <MobAplikations />
      </div>
    </div>
  );
}
