import React from "react"
import Logo from "./img/e-comm-steaks-logo.png";


function Header() {
    return(
        <div className="wrapper">
            <header className="container header">
                <div className="row">
                {/* Logo */}
                    <div className="col-md-4">
                        <div className="header-img-group">
                            <img src={Logo} className="logo"/>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <nav className="right-nav">
                            <ul className="nav-items">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">All Products</a></li>
                                <li><a href="#">Single Product</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* Cart Items */}
                <div className="row">
                    <div>
                        <div class="top-icons">
                            <div id="shoppingDiv">
                                <div class="shopping-buttons">
                                    <button type="button" class="btn" id="cartBtn"><span id="cartItems">0</span> items(s) - $<span id="cartSubtotal">0.00</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
};

export default Header;