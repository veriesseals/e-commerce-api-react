import React from "react";
import FeaturedSteak from "./img/featured-ribeye-sm.jpg";


function MainContent() {
    return (
    <div>
        <img src={FeaturedSteak} className="FeaturedSteak" alt="Featured Steak"/>

        <div><hr></hr></div>

        <h2 class="col text-center">Welcome to E-COMM. Premiere Online Steak Lovers DataBase</h2>
        
    </div>
    );
}

export default MainContent;
