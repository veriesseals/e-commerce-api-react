import React from "react"


function Header() {
    return(
        <header>
         <h1>React E-Commerce Store</h1>
            <nav className="nav">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="60px" className="logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;