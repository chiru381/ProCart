import React from 'react';
import Apple from '../../../assets/images/apple.jpg';
import Oppo from '../../../assets/images/oppo.jpg';
import Samsung from '../../../assets/images/samsung.jpg';
import Redmi from '../../../assets/images/redmi.jpg';

let Mobiles=()=>{
    return(
        <>
        <section className="bg-warning">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Mobile Products</h1>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container m-4">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header">
                                <img src={Apple} alt="apple" />
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">Apple Iphone</li>
                                    <li className="list-group-item">89000</li>
                                    <li className="list-group-item">16gb RAM</li>
                                    <li className="list-group-item">
                                        <button className="btn btn-success">
                                            Add to Cart
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header">
                                <img src={Oppo} alt="oppo" />
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">Oppo A31</li>
                                    <li className="list-group-item">12000</li>
                                    <li className="list-group-item">4gb RAM</li>
                                    <li className="list-group-item">
                                        <button className="btn btn-success">
                                            Add to Cart
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header">
                                <img src={Samsung} alt="samsung" />
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">Samsung Galaxy</li>
                                    <li className="list-group-item">23000</li>
                                    <li className="list-group-item">8gb RAM</li>
                                    <li className="list-group-item">
                                        <button className="btn btn-success">
                                            Add to Cart
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header">
                                <img src={Redmi} alt="redmi"  />
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">Redmi Note</li>
                                    <li className="list-group-item">9999</li>
                                    <li className="list-group-item">3gb RAM</li>
                                    <li className="list-group-item">
                                        <button className="btn btn-success">
                                            Add to Cart
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Mobiles;