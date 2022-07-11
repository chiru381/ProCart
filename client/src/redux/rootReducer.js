import { combineReducers } from 'redux';

import { productReducer, getProductReducer } from './products/product.reducer';
import { userReducer, loginReducer } from './users/user.reducer';

let rootReducer=combineReducers({ 
    product: productReducer,
    user: userReducer,
    login: loginReducer,
    getProduct: getProductReducer,
 });
export { rootReducer };