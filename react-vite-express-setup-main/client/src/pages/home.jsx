import React from "react";
import './pageStyle.css';
import { NavLink } from "react-router-dom";


function Home() {
    return (
        <div id="wrapper">
            <div className="hero">
                <img src="images/home.png" alt="Hero image" className="hero" />
            </div>
            <header>
                <h2>Your Sustainable social platform for second-hand clothes!</h2>
                <h3>Join us and start selling and buying clothes today!</h3>
                <button className="login" ><NavLink to="/account">Create an Account!</NavLink></button>
            </header>

            <div className="cards">
                <NavLink to="/women">
                    <div className="woman_card hero_card">
                        <div className="card_img_wrapper">
                            <img src="images/woman.jpg" alt="Hero image" className="hero" />
                            <h1 className="top_text_on_image">Women</h1>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/men">
                    <div className="man_card hero_card">
                        <div className="card_img_wrapper">
                            <img src="images/man.jpg" alt="Hero image" className="hero" />
                            <h1 className="top_text_on_image">Men</h1>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}
export default Home; 