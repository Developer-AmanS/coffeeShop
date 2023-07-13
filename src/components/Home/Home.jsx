import React from 'react';
import "./Home.css"

const Home = () => {
  return (
    <section className="home" id="home">
        <div className="home__container container">
            <div className="home__content">
                <span className="home__subtitle">
                    Welcome To Coffero!
                </span>
                <h1 className="home__title">Discover Amazing Coffee House & Get Energy</h1>
                <p className="home__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere dolor doloremque reiciendis ea maiores fugiat velit deleniti veniam ad sint.
                </p>

                <div className="home__btns">
                    <a href="#menu" className="btn">Check Menu</a>
                    <a href="#reservation" className="btn home__btn">Book Table</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home