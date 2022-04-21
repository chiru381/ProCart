import { combineReducers } from 'redux';
import { productReducer } from './products/product.reducer';
import { userReducer, loginReducer } from './users/user.reducer';

let rootReducer=combineReducers({ 
    product: productReducer,
    user: userReducer,
    login: loginReducer,
 });
export { rootReducer };