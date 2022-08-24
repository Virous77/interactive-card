import React from "react";
import "./Card.css";
import logo from "../images/card-logo.svg";
import CradForm from "./CradForm";

const CardImages = () => {
  const typingNameHandler = (enterName) => {
    document.querySelector(".card-holder").textContent =
      enterName.length <= 20
        ? enterName.toUpperCase()
        : enterName.slice(0, 20).toUpperCase();
  };

  const typingNumberHandler = (enterNumber) => {
    const strictNumber =
      enterNumber.length <= 16 ? enterNumber : enterNumber.slice(0, 16);

    document.querySelector(".card-number").textContent = strictNumber;
  };

  const typingMonthHandler = (enterMonth) => {
    document.querySelector(".month").textContent = enterMonth;
  };

  const typingYearHandler = (enterYear) => {
    document.querySelector(".year").textContent = enterYear.slice(2);
  };

  const typingCvvHandler = (enterCvv) => {
    document.querySelector(".cvv").textContent = enterCvv.slice(0, 3);
  };

  return (
    <section className="section">
      <div className="card-pics">
        <div className="background-img">
          <div className="top-img">
            <img className="logo" alt="Logo" src={logo} />
            <div className="card-number">0000 0000 0000 0000</div>
            <div className="cardholder-data">
              <div className="card-holder">JANE APPLESEED</div>
              <div className="card-expiry">
                <span className="month">00</span>/
                <span className="year">00</span>
              </div>
            </div>
          </div>

          <div className="back-img">
            <p className="cvv">123</p>
          </div>
        </div>
        <CradForm
          onTypingName={typingNameHandler}
          onTypingNumber={typingNumberHandler}
          onTypingMonth={typingMonthHandler}
          onTypingYear={typingYearHandler}
          onTypingCvv={typingCvvHandler}
        />
      </div>
    </section>
  );
};

export default CardImages;
