import CartItem from "./CartItem";
import { cartContext } from "./CartContext";
import { useContext } from 'react';

const CartContainer = (props) => {
    const useCartContext = useContext(cartContext);
    const { deleteFromCart } = useCartContext;
    
    return (
            <div className="dropShadow">
                <h2>Detalles productos</h2>
                {props.carrito.map(item => (
                    <CartItem key={item.product.id} item={item} deleteFromCart={deleteFromCart} />
                ))}
            </div>
    )
}
export default CartContainer