import { Badge } from '@mui/material';
import { CartContext } from "./CartContext";
import { useContext } from 'react';

const CartWidget = () =>  {
    const useCartContext = useContext(CartContext);
    const { prodsTotal } = useCartContext;
    
    return(
        <>
            <Badge badgeContent={prodsTotal} color="info">
            </Badge>
        </>
    )
}
export default CartWidget
