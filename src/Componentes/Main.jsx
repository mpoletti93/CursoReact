import React   from "react";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import CartWidget from "./CartWidget";
import Cart from "./Cart";
import { Routes, Route} from "react-router-dom";

const Main = (props) => {
    return (
    <main className="container">      
        <br/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route  path="/item/:slug" element={<ItemDetailContainer/>}/>
        </Routes>
    </main>
    )
}

export default Main