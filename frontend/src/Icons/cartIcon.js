import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartIcon = () => {
    return (
        <div>
            <FontAwesomeIcon className='w-16 h-8 cursor-pointer' icon={faShoppingCart} />
        </div>
    );
};

export default CartIcon;
