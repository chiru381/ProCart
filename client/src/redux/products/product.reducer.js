import {
    UPLOAD_REQUEST,
    UPLOAD_SUCCESS,
    UPLOAD_FAILURE,
    GET_REQUEST,
    GET_SUCCESS,
    GET_FAILURE,
} from './product.action';

let initialProduct={
    product: [],
    loading: "",
};

let productReducer=(state=initialProduct, action)=>{
    let { type, payload } = action;
    // console.log(action, "........hello, action");
    // console.log(payload, ".......");
    // console.log(type, " User Request");
    switch(action.type){
        case UPLOAD_REQUEST:
            return { ...state, loading: true };
        case UPLOAD_SUCCESS:
            return { ...state, loading: false, product: payload };
        case UPLOAD_FAILURE:
            return { ...state, loading: false };
        default:
            return state;
    }
};

let initialProductGet={
    products: [],
    loading: "",
};

let getProductReducer=(state=initialProductGet, action)=>{
    // let { type, payload } = action;
    // console.log(action, "........hello, action11111");
    // console.log(payload, ".......11111");
    // console.log(type, " User Request11111");
    switch(action.type){
        case GET_REQUEST:
            return { ...state, loading: true };
        case GET_SUCCESS:
            return { ...state, loading: false, products: action.payload };
        case GET_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
export { productReducer, getProductReducer };