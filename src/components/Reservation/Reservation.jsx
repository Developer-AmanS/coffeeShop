import React from 'react';
import {FaRegBookmark} from "react-icons/fa";
import "./Reservation.css";
import shapeTwo from "../../assets/shape-2.png"
import shapeThree from "../../assets/shape-3.png"

const Reservation = () => {
  return (
    <section className="reservation container" id='reservation'>
      <h2 className="section__title" data-title="Reservation">
        Book A Table
      </h2>


      <form action="" className="reservation__form grid">
        <div className="form__input_div">
            <input type="text" placeholder='Your Name' className="form__input" />
        </div>
        <div className="form__input_div">
            <input type="email" placeholder='Your Email' className="form__input" />
        </div>
        <div className="form__input_div">
            <input type="email" placeholder='Your Phone' className="form__input" />
        </div>
        <div className="form__input_div">
            <input type="email" placeholder='Date Ex: DDD/MM/YYYY' className="form__input" />
        </div>
        <div className="form__input_div">
            <input type="email" placeholder='Time Ex: 01:25PM' className="form__input" />
        </div>
        <div className="form__input_div">
            <input type="email" placeholder='Number of People' className="form__input" />
        </div>
        <div className="form__input_div form__input-textarea">
                <textarea placeholder="Your Message" className="form__input"></textarea>
        </div>

        <button className="btn btn--flex reservation__btn">
            <FaRegBookmark /> Book A Table
        </button>
      </form>

      <img src={shapeTwo} className='shape__two' alt="" />
      <img src={shapeThree} className='shape__three' alt="" />
    </section>
  );
}

export default Reservation