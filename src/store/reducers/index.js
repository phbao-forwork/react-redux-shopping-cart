import { combineReducers } from 'redux';

import cartReducer from './cartReducer';

// combineReducers cho phép bạn dùng nhiều reducer trong store của mình
const rootReducer = combineReducers({ cart: cartReducer });
export default rootReducer;
