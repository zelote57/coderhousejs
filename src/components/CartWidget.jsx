import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTape } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return(
        <div className="cart-widget">
            <FontAwesomeIcon icon={faTape} size="2x" color="black" />
        <div className="qty-display">3</div>
    </div>
    );
}
export default CartWidget;