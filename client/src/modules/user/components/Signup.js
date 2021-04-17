import React, { useState } from 'react';

let Signup=()=>{
    let [user, setUser]=useState({user: "", email: "", password: ""});
    let inputHandler=(event)=>{
        setUser({...user, [event.taget.name]:evant.target.value});
    };
    let submitHandler=(event)=>{
        console.log(user);
        event.preventDefault();
    };
    return(
        <>
        <section></section>
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
                                        <input type="text" className="form-control" name="user" placeholder="UserName" onChange={inputHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="email" placeholder="Email" onChange={inputHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="password" placeholder="Password" onChange={inputHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="form-control btn btn-success" />
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