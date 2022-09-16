import React from "react";
import Cart from "../Imagenes/cart.png"

function CartWidget ()  {
    return(
        <img  className="nav-item" src={Cart} width="100" alt="Cart" />
    );
};

export default CartWidget;
