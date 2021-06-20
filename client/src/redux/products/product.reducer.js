import {
    UPLOAD_REQUEST,
    UPLOAD_SUCCESS,
    UPLOAD_FAILURE,
    LAPTOP_REQUEST,
    LAPTOP_SUCCESS,
    LAPTOP_FAILURE,
} from './product.action';

let initialProduct={
    product: [],
    loading: "",
};
let productReducer=(state=initialProduct, action)=>{
    let { type, payload } = action;
    console.log(action, "........hello, action");
    console.log(payload, ".......");
    console.log(type, " User Request");
    switch(action.type){
        case UPLOAD_REQUEST:
            return { ...state, loading: true };
        case UPLOAD_SUCCESS:
            return { ...state, loading: false, product: payload };
        case UPLOAD_FAILURE:
            return { ...state, loading: false };
        case LAPTOP_REQUEST:
            return { ...state, loading: true };
        case LAPTOP_SUCCESS:
            return { ...state, loading: false, product: payload };
        case LAPTOP_FAILURE:
            return { ...state, loading: false };
        default:
            return state;
    }
};
export { productReducer };