import React from "react";
import "./Card.css";
import completeLogo from "../images/icon-complete.svg";
import "./ThankYou.css";

const CradForm = (props) => {
  const editingName = (e) => {
    props.onTypingName(e.target.value);
  };

  const editingNumber = (e) => {
    props.onTypingNumber(e.target.value);
  };

  const editingMonth = (e) => {
    props.onTypingMonth(e.target.value);
  };

  const editingYear = (e) => {
    props.onTypingYear(e.target.value);
  };

  const editingCvv = (e) => {
    props.onTypingCvv(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    document.querySelector(".complete").classList.remove("active");
  };

  const pageReloadHandler = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="complete active">
        <img className="comp-logo" alt="Complete Message" src={completeLogo} />
        <h2 className="comp-title">Thank You!</h2>
        <p className="comp-msg">We've added your card details</p>
        <button className="continue" onClick={pageReloadHandler}>
          Continue
        </button>
      </div>

      <form className="main" onSubmit={onSubmitHandler}>
        <div className="name-folder">
          <label>CARDHOLDER NAME</label>
          <input
            type="text"
            required
            placeholder="e.g. Felicia Leire"
            onChange={editingName}
          />
        </div>

        <div className="number-folder">
          <label>CARD NUMBER</label>
          <input
            type="text"
            required
            placeholder="e.g. 9561 6489 6389 101E"
            onChange={editingNumber}
          />
        </div>

        <div className="month-data">
          <label>
            EXP. DATE (MM/YY) <span className="span">CVC</span>
          </label>
          <div className="data">
            <select name="Months" onChange={editingMonth}>
              <option>MONTH</option>
              <option>JAN</option>
              <option>FEB</option>
              <option>MAR</option>
              <option>APR</option>
              <option>MAY</option>
              <option>JUN</option>
              <option>JUL</option>
              <option>AUG</option>
              <option>SEP</option>
              <option>OCT</option>
              <option>NOV</option>
              <option>DEC</option>
            </select>

            <select name="Years" onChange={editingYear}>
              <option>YEAR</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
              <option>2029</option>
              <option>2030</option>
            </select>

            <input
              type="number"
              required
              placeholder="e.g 123"
              onChange={editingCvv}
            />
          </div>
        </div>
        <button className="button" type="Submit">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default CradForm;
