import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from './user.action';

let initialUser={
    user: [],
    loading: "",
};

let initialLogin={
    login: [],
    loading: "",
};

let userReducer=(state=initialUser, action)=>{
    let { type, payload } = action;
    // console.log(action, "........hello, action");
    // console.log(payload, ".......");
    // console.log(type, " User Request");
    switch(action.type){
        case REGISTER_REQUEST:
            return { ...state, loading: true };
        case REGISTER_SUCCESS:
            return { ...state, loading: false, user: payload };
        case REGISTER_FAILURE:
            return { ...state, loading: false };
        default:
            return state;
    }
};

let loginReducer=(state=initialLogin, action)=>{
    let { type, payload } = action;
    // console.log(action, "........hello, action");
    // console.log(payload, ".......");
    // console.log(type, " User Request");
    switch(action.type){
        case LOGIN_REQUEST:
            return { ...state, loading: true };
        case LOGIN_SUCCESS:
            return { ...state, loading: false, login: payload };
        case LOGIN_FAILURE:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export { userReducer, loginReducer };