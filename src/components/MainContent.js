import React from "react";
import FeaturedSteak from "./img/featured-ribeye-sm.jpg";

function MainContent() {
    return (
        <div>
            <img src={FeaturedSteak} width="696px" className="FeaturedSteak"/>

            <h2>Welcome to E-COMM. Premiere Online Steak Store</h2>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React.</li>
            </ol>
        </div>
    )
};

export default MainContent;