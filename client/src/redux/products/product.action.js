import axios from 'axios';

const UPLOAD_REQUEST = "UPLOAD_REQUEST";
const UPLOAD_SUCCESS = "UPLOAD_SUCCESS";
const UPLOAD_FAILURE = "UPLOAD_FAILURE";

const GET_REQUEST = "GET_REQUEST";
const GET_SUCCESS = "GET_SUCCESS";
const GET_FAILURE = "GET_FAILURE";

let uploadProductAction=(product, history)=>{
    console.log("redux action");
    return async(dispatch) => {
        try {
            dispatch({ type: UPLOAD_REQUEST });

            let config = {
                headers: {
                    "content-type": "application/json",
                },
            };
            let response = await axios.post(
                `http://localhost:5000/product/upload`,
                JSON.stringify(product),
                config
            );
            dispatch({ type: UPLOAD_SUCCESS, payload: response.data });
            history.push("/mobiles");
        } catch (error) {
            dispatch({ type: UPLOAD_FAILURE });
        }
    };
};

let getProducts = (products, history) => {
    console.log("getProducts");
    return async(dispatch) => {
        try {
            dispatch({ type: GET_REQUEST });

            // let config = {
            //     headers: {
            //         "content-type": "application/json",
            //     },
            // };
            let response = await axios.get(
                `http://localhost:5000/product/mobiles`,
                JSON.stringify(products),
                // config
            );
            dispatch({ type: GET_SUCCESS, payload: response.data });
            history.push("/laptops");
        } catch (error) {
            dispatch({ type: GET_FAILURE });
        }
    };
};

export { 
    uploadProductAction,
    getProducts,
    UPLOAD_REQUEST,
    UPLOAD_SUCCESS,
    UPLOAD_FAILURE,
    GET_REQUEST,
    GET_SUCCESS,
    GET_FAILURE
 };