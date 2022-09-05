import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const productos = [
            {"id":1, "nombre":"Pantalon", "descripcion":"Esto es un pantalon.",  "imagen":"pantalon", "precio":1500},
            {"id":2, "nombre":"Camisa", "descripcion":"Esto es una camisa.", "imagen":"camisa",  "precio":5600},
            {"id":3, "nombre":"Top", "descripcion":"esto es un top.", "imagen":"Top", "precio":1700},
        ];

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        });
    }, []);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;