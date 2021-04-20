import React, { useState } from 'react';
import {Link} from 'react-router-dom';

let Login=()=>{
    let [user, setUser]=useState({email: "", password: "" });
    let inputHandler=(event)=>{
        setUser({...user, [event.target.name]: event.target.value});
    };
    let submitHandler=(event)=>{
        event.preventDefault();
        console.log(user, "Testing...");
    };
    return(
        <>
        <section className="bg-warning">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Login Form</h3>
                    </div>
                </div>
            </div>
        </section>
        <section className="m-auto">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header">
                                <h4>Login Details</h4>
                                <pre>{JSON.stringify(user)}</pre>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitHandler}>
                                    <div className="form-group">
                                        <input 
                                           type="text" 
                                           className="form-control" 
                                           placeholder="EmailId" 
                                           name="email" 
                                           value={user.email} 
                                           onChange={inputHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                           type="password" 
                                           className="form-control" 
                                           placeholder="Password" 
                                           name="password" 
                                           value={user.password} 
                                           onChange={inputHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                           type="submit" 
                                           className="form-control btn btn-primary" 
                                           value="Login" />
                                    </div>
                                </form>
                                <Link to="/forgetpassword">ForgetPassword</Link>
                                <Link to="/signup">Signup</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Login;