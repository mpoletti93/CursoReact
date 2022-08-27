import React, { Component } from "react";
import Cart from "../Imagenes/cart.png"

class CartWidget extends Component{
    render (){
        return(
            <img  className="nav-item" src={Cart} width="100" alt="Cart" />
        )
    }
}

export default CartWidget;

/*
const CartWidget = () => {
    return (
<img  className="nav-item" src={Cart} width="100" alt="Cart" />
    )
}

export default CartWidget;
*/