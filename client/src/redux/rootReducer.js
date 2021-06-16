import { combineReducers } from 'redux';
import { productReducer } from './products/product.reducer';
let rootReducer=combineReducers({ product: productReducer });
export { rootReducer };