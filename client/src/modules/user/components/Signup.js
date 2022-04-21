import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { uploadUserAction } from '../../../redux/users/user.action';

let Signup=()=>{
    let dispatch = useDispatch();
    let history = useHistory();
    let [user, setUser]=useState({ name: "", email: "", password: "" });
    let inputHandler=(event)=>{
        setUser({...user, [event.target.name]: event.target.value});
    };
    let submitHandler=(event)=>{
        console.log(user);
        event.preventDefault();
        dispatch(uploadUserAction(user, history));
    };
    return(
        <>
        <section className="bg-warning p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Registration</h3>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <p className="display-6">Registration Details</p>
                                <pre>{JSON.stringify(user)}</pre>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitHandler}>
                                    <div className="form-group">
                                        <input 
                                           type="text" 
                                           className="form-control" 
                                           name="name" 
                                           placeholder="UserName" 
                                           onChange={inputHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                           type="text" 
                                           className="form-control" 
                                           name="email" 
                                           placeholder="Email" 
                                           onChange={inputHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                           type="text" 
                                           className="form-control" 
                                           name="password" 
                                           placeholder="Password" 
                                           onChange={inputHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                           type="submit" 
                                           className="form-control btn btn-success" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Signup;