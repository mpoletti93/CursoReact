import { useContext } from 'react';
import { CartContext } from "./CartContext";

const CartItem = (props) => {
    const useCartContext = useContext(CartContext);
    const { deleteFromCart } = useCartContext;
    
    return (
        <div key={props.item.product.id} id="containerProdsCarrito" className="dropShadow">
            <div className="prodsCarrito">
                <img alt="" className="imgProd" src={props.item.product.img} />
                <span><p>{props.item.product.nombre}</p></span>
                <span><p>${props.item.product.precio} x {props.item.count} unidades</p></span>
                <button onClick={() => deleteFromCart(props.item.product)} >Eliminar producto</button>
            </div>
            <span className="spanPrecio"><br/><h3 className="h3Precio">Total:</h3> <p>${props.item.product.precio * props.item.count}</p></span>
        </div>
    )
}
export default CartItem