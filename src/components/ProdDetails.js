import { React, useState } from "react";
import "./ProdDetails.css";
import medicamentItems from "./medicamentItems";
import { useParams, useNavigate } from "react-router-dom";

const ProdDetails = (props) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();

  const prodDetails = medicamentItems.find((item) => item.id == id);

  const quentityHandler = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  return (
    <div>
      <div className="medicaments-head">
        <p className="prod-det-first-title">წამლები</p>
        <p className="prod-det-sec-title">
          მთავარი / კატალოგი / წამლები / რედუქსინი
        </p>
      </div>
      <div className="prod-details">
        <div>
          <img src={prodDetails.medImg} alt="medImg" className="prod-img" />
        </div>
        <div>
          <div>
            <h2 className="prod-title">{prodDetails.title}</h2>
          </div>
          <div className="prod-price-cont">
            <span className="prod-price">
              {" "}
              {parseFloat(prodDetails.price).toFixed(2)}
            </span>
          </div>

          <div className="prod-text">
            <p>ანთების საწინააღმდეგო პრეპარატი</p>
            <p>ქვეყანა: დიდი ბრიტანეთი </p>
            <p>მწარმოებელი: რეკიტ ბენკისერ</p>
            <p>გაცემის ფორმა: III ჯგუფი ურეცეპტო</p>
            <p>კოდი: 87662</p>
            <div className="quantity-handler">
              <select onChange={quentityHandler}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="buy-button">
              <button
                onClick={() => {
                  props.cartHandler({ ...prodDetails, quantity: quantity });
                  navigate("/Cart");
                }}
              >
                კალათაში დამატება
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="descri-head">
          <div>
            <p className="active-title">ანოტაცია</p>
          </div>
          <p>სად შევიძინო</p>
          <p>შემადგენლობა</p>
          <p>მიღების წესი</p>
        </div>
        <div className="prod-description">
          <h4>რედუქსინი</h4>
          <br/>
          <p>
            საერთაშორისო დასახელება - raduksin <br />
            ათქ.კლასიფიკაციის კოდი - M01AE01 <br />
            <br/> <br/>
            კლინიკურ-ფარმაკოლოგიური ჯგუფი <br/>
            არასტეროიდული ანთების საწინააღმდეგო საშუალებები, პროპიონის მჟავას წარმოებული პრეპარატები გამოხატული
            ანალგეზიური ეფექტით
            <br/> <br/> <br/> 
            ერთი გარსით გაფარული ტაბლეტი შეიცავს აქტიურ
            ნივთიერებას - იბუპროფების 400 მგ და დამხმარე ნივთიერებებს: ნატრიუმის
            კროსკარმელოზას, ნატრიუმის ლაურილსულფატს, ნატრიუმის ციტრატს,
            სტეარინის მჟავას, სილიციუმის კოლოიდურ ანჰიდრინს, ნატრიუმის
            კარმელოზას, ტალკს, აკაციას, საქაროზას, ტიტანის დიოქსიდს, მაგროგოლი
            600-ს, ოპაკოდ S-1-9460 HV ყავისფერ სამრეწველო მეთილირებულ სპირტს,
            გამოხდილ წყალს. 
            <br/><br/><br/>
            აღწერა <br/>
            ტაბლეტები 1,25 მგ და 10 მგ; თეთრი მრგვალი
            ორმხრივად ამოზნექილი ტაბლეტი, ერთგვაროვანი სტრუქტურით, ტაბლეტის ერთ
            მხარეს წითელი ფერის წარწერით: „Nurofen 400“.
            <br/><br/><br/>
            ფარმაკოლოგიური თვისებები <br/>
            პრეპარატი მიეკუთვნება არასტეროიდულ ანთების საწინააღმდეგო
            პრეპარატს. გააჩნია ტკივილგამაყუჩებელი, სიცხის დამწევი და ანთების
            საწინააღმდეგო მოქმედება. ახდენს ცოგ1-ისა და ცოგ2-ის არასელექციურ
            ბლოკადას. იბუპროფენის მოქმედების მექანიზმი განპირობებულია
            პროსტაგლანდინების-ტკივილის, ანთებისა და ჰიპერთერმული რეაქციის
            მედიატორების- სინთეზის დათრგუნვით. <br/> 
            ფარმაკოკინეტიკა <br/> 
            მისი აბსორბცია
            მაღალია. T 1/2 ნახევარგამოყოფის პერიოდი - 2 საათი; პლაზმის ცილებთან
            შეკავშირების ხარისხი - 90%. ნელა აღწევს სახსრების შიგნით, სადაც
            ხდება მისი შეკავება სინოვიალურ ქსოვილში, რომელშიც მისი კონცენტრაცია
            უფრო მარალია, ვიდრე პლაზმაში. აბსორბციის შემდეგ ფარმაკოლოგიურად
            არააქტიური R-ფორმის დაახლოებით 60% ნელა გარდაიქმნება აქტიურ S-
            ფორმად. განიცდის მეთაბოლიზმს. ელიმინირება თირკმლებით (უცვლელი სახით-
            არაუმეტეს 1%-სა) ხორციელდება, ნაკლებად- ნაღველთან ერთად.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProdDetails;
