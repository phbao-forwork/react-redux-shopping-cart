// Action creators
export const addProductToCart = (product) => {
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: product,
    };
};

export const removeProductFromCart = (product) => {
    return {
        type: 'REMOVE_PRODUCT_FROM_CART',
        payload: product,
    };
};
