import React from 'react';
import aboutImg from "../../assets/about-img.jpg";
import {FiCheck} from "react-icons/fi";
import "./About.css"

const About = () => {
  return (
   <section className="about section" id="about">
<div className="about__grid container grid">
    <div className="about__img-wrapper">
        <img src={aboutImg} alt="" className="about__img" />
    </div>

    <div className="about__content">
        <h2 className='section__title title__left' data-title='About Us'>
            Fresh Quality and Organic Taste Coffee House For You 
        </h2>

        <p className="about__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Sed ab praesentium quaerat distinctio minus temporibus amet pariatur hic quam vero. 
            Lorem ipsum dolor sit amet.
        </p>

        <div className="about__details grid">
            <p className="about__details-description">
                <FiCheck />
                Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="about__details-description">
                <FiCheck />
                Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="about__details-description">
                <FiCheck />
                Lorem ipsum dolor sit amet consectetur.
            </p>
        </div>

        <a href="#team" className="btn">Our Experts</a>
    </div>
</div>
   </section>
  )
}

export default About