import React from "react";
import FeaturedSteak from "./img/featured-ribeye-sm.jpg";
import Ribeye from "./img/ribeye-steak.jpeg";
import Flank from "./img/flank-steak.jpeg";
import NewYorkStrip from "./img/newyork-strip.jpeg";
import Tomahawk from "./img/tomahawk-steaks.jpeg";
import Tenderloin from "./img/tenderloin.jpeg";
import PrimeRib from "./img/primerib.jpeg";

function MainContent() {
    return (
    <div>
        <img src={FeaturedSteak} className="FeaturedSteak" alt="Featured Steak"/>

        <div><hr></hr></div>

        <h2 class="col text-center">Welcome to E-COMM. Premiere Online Steak Store</h2>
        {/* Select Your Steak Menu */}
        {/* --------------------------------------------- */}
        <section class="container main-page">
            <div class="row">
                <div class="col text-center">
                <h3>Select your Steak below</h3>
                </div>
            </div>
            <div><hr></hr></div>
            <div classname="steak-group" id="steakGroup1">
                {/* Steak Cards */}
                {/* --------------------------------------------- */}
                <div class="card">
                    <img src={Ribeye} class="card-img-top" alt="Ribeye Steak"/>
                    <div class="card-body">
                        <h5 class="card-title text-center">Ribeye Steak</h5>
                        <p class="card-text text-center">Click below to Order.</p>
                        <a href="#" class="btn btn-primary">Add to your order</a>
                    </div>
                </div>
                <div class="card">
                    <img src={Flank} class="card-img-top" alt="Flank Steak"/>
                    <div class="card-body">
                        <h5 class="card-title text-center">Flank Steak</h5>
                        <p class="card-text text-center">Click below to Order.</p>
                        <a href="#" class="btn btn-primary">Add to your order</a>
                    </div>
                </div>
                <div class="card">
                    <img src={NewYorkStrip} class="card-img-top" alt="New York Strip"/>
                    <div class="card-body">
                        <h5 class="card-title text-center">New York Strip</h5>
                        <p class="card-text text-center">Click below to Order.</p>
                        <a href="#" class="btn btn-primary">Add to your order</a>
                    </div>
                </div>
            </div>
            <div id="steakGroup2">
                {/* Steak Cards */}
                {/* --------------------------------------------- */}
                <div class="card">
                    <img src={Tomahawk} class="card-img-top" alt="Tomahawk Steak"/>
                    <div class="card-body">
                        <h5 class="card-title text-center">Tomahawk Steak</h5>
                        <p class="card-text text-center">Click below to Order.</p>
                        <a href="#" class="btn btn-primary">Add to your order</a>
                    </div>
                </div>
                <div class="card">
                    <img src={Tenderloin} class="card-img-top" alt="Tenderloin"/>
                    <div class="card-body">
                        <h5 class="card-title text-center">Tenderloin</h5>
                        <p class="card-text text-center">Click below to Order.</p>
                        <a href="#" class="btn btn-primary">Add to your order</a>
                    </div>
                </div>
                <div class="card">
                    <img src={PrimeRib} class="card-img-top" alt="Prime Rib"/>
                    <div class="card-body">
                        <h5 class="card-title text-center">Prime Rib</h5>
                        <p class="card-text text-center">Click below to Order.</p>
                        <a href="#" class="btn btn-primary">Add to your order</a>
                    </div>
                </div>
            </div>
        </section>

    </div>
    );
}

export default MainContent;
