import axios from 'axios';

const REGISTER_REQUEST = "REGISTER_REQUEST";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAILURE = "REGISTER_FAILURE";

const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

let uploadUserAction=(user, history)=>{
    console.log("redux action...1");
    return async(dispatch) => {
        try {
            dispatch({ type: REGISTER_REQUEST });

            let config = {
                headers: {
                    "content-type": "application/json",
                },
            };
            let response = await axios.post(
                `http://localhost:5000/user/register`,
                JSON.stringify(user),
                config
            );
            dispatch({ type: REGISTER_SUCCESS, payload: response.data });
            history.push("/login");
        } catch (error) {
            dispatch({ type: REGISTER_FAILURE });
        }
    };
};

let uploadLoginAction=(login, history)=>{
    console.log("login success...1");
    return async(dispatch) => {
        try {
            dispatch({ type: LOGIN_REQUEST });

            let config = {
                headers: {
                    "content-type": "application/json",
                },
            };
            let response = await axios.post(
                `http://localhost:5000/user/login`,
                JSON.stringify(login),
                config
            );
            dispatch({ type: LOGIN_SUCCESS, payload: response.data });
            history.push("/profile");
        } catch (error) {
            dispatch({ type: LOGIN_FAILURE });
        }
    };
};

export { 
    uploadUserAction,
    uploadLoginAction,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
 };