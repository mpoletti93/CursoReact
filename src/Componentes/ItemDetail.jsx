
import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    return (
        <div className="detail">
            <img src={item.img} alt={item.title} />
            <div className="infoDetail">
                <h2>{item.title}</h2>
                <h3>${item.price}.-</h3>

                <ItemCount stock={10} initial={1} />
            </div>
        </div>
    );
};

export default ItemDetail;