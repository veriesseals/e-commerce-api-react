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
                                <li><a href="#">Steaks</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <nav className="nav">
                </nav>
            </header>
        </div>
    )
};

export default Header;