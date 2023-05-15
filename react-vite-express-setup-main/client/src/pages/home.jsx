import React from "react";
import './pageStyle.css';


function Home() {
    return (
        <div id="wrapper">
            <div className="hero">
            <img src="images/home.png" alt="Hero image" className="hero" />
            </div>
            <header>
                <h2>Your Sustainable social platform for swapping second-hand clothes!</h2>
            </header>

            <div className="cards">
                <div className="women_card"></div>
                <div className="men_card"></div>
            </div>
        </div>
    );
}
export default Home; 