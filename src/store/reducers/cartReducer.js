const initalStateCart = [];

const cartReducer = (state = initalStateCart, { type, payload }) => {
    switch (type) {
        case 'ADD_PRODUCT_TO_CART':
            return [...state, payload];
        case 'REMOVE_PRODUCT_FROM_CART':
            const findIndexProduct = state.findIndex((product) => product.id === payload.id);
            state.splice(findIndexProduct, 1);
            const newCart = state;
            return [...newCart];
        default:
            return state;
    }
};

export default cartReducer;
