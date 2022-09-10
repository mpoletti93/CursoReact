import React, { useEffect, useState } from 'react';
import { productos } from '../Data/Productos';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const getProduct = () =>
            new Promise((res, rej) => {
                const product = productos.find((prod) => prod.id === 1);
                setTimeout(() => {
                    res(product);
                }, 500);
            });

        getProduct()
            .then((info) => {
                setItem(info);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;