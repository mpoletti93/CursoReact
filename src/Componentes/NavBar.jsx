import React from "react";
import Logo from "../Imagenes/Logo.jpg"

const Navvar = () => {
    return (
<div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><img src={Logo} width="150" alt="Guapasbb"/></a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
                    </li>
                </ul>
            </div>
    </nav>
</div>
    )
}

export default Navvar;