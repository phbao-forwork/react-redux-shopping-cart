import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

function Header() {
    const cart = useSelector((state) => state.cart);
    return (
        <div className="header">
            <h2>Header</h2>
            <div className="nav">
                <Link to={'/products'}>Products</Link>
            </div>
            <Link to={'/cart'}>Cart: {cart.length}</Link>
        </div>
    );
}

export default Header;
