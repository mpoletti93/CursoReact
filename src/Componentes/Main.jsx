import React   from "react";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import CartWidget from "./CartWidget";
import { Routes, Route} from "react-router-dom";

const Main = (props) => {
    return (
    <main className="container">      
        <br/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
            <Route path="/CartWidget" element={<CartWidget/>}/>
            <Route  path="/item/:slug" element={<ItemDetailContainer/>}/>
        </Routes>
    </main>
    )
}

export default Main