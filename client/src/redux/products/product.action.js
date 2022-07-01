import axios from 'axios';

const UPLOAD_REQUEST = "UPLOAD_REQUEST";
const UPLOAD_SUCCESS = "UPLOAD_SUCCESS";
const UPLOAD_FAILURE = "UPLOAD_FAILURE";

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

export { 
    uploadProductAction,
    UPLOAD_REQUEST,
    UPLOAD_SUCCESS,
    UPLOAD_FAILURE,
 };