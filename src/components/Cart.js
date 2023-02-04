import { useSelector, useDispatch } from 'react-redux';
import { removeProductFromCart } from '~/store/actions/cartActions';

function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    let cost = 0;
    for (const item of cart) {
        cost += item.price;
    }

    return (
        <div className="cart">
            {cart.map((item, index) => (
                <div key={index} className="item">
                    <h3>{item.name}</h3>
                    <p>Price: {item.price}$</p>
                    <button onClick={() => dispatch(removeProductFromCart(item))}>Delete</button>
                </div>
            ))}
            <div className="cart-bottom">
                <h3>Cost</h3>
                <p>{cost}$</p>
                <button>Order</button>
            </div>
        </div>
    );
}

export default Cart;
