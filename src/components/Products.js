import { useDispatch } from 'react-redux';
import products from '~/product';
import { addProductToCart } from '~/store/actions/cartActions';

function Products() {
    const dispatch = useDispatch();
    return (
        <div className="product">
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <h3>{product.name}</h3>
                    <p>Price: {product.price}$</p>
                    <button onClick={() => dispatch(addProductToCart(product))}>Buy</button>
                </div>
            ))}
        </div>
    );
}

export default Products;
