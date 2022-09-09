import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {

return(
    <div>
        <ul className="navbar-ul">
            <li className="navbar-li"><Link className="navbar-link" to = "/cart">Cart</Link></li>
            <li className="navbar-li"><Link className="navbar-link" to = "/">Home</Link></li>

        </ul>


    </div>
)


}

export default Navbar;