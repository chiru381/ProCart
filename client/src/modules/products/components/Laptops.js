import React from 'react';
import Hp15 from '../../../assets/images/hp15.jpg';
import Lenovo from '../../../assets/images/lenovo.jpg';
import Acer from '../../../assets/images/acer.jpg';
import Dell from '../../../assets/images/dell.jpg';

let Laptops=()=>{
    return(
        <>
        <section className="bg-warning p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Laptops Data</h1>
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
                                <img src={Lenovo} alt="Lenovo laptop" width="90%" />
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">Lenovo Ideapad</li>
                                    <li className="list-group-item">27000</li>
                                    <li className="list-group-item">celeron</li>
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
                                <img src={Acer} alt="Acer laptop" width="100%" />
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">Acer Aspire</li>
                                    <li className="list-group-item">33000</li>
                                    <li className="list-group-item">i3</li>
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
                                <img src={Hp15} alt="hp15 laptop" width="100%" />
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">HP 15</li>
                                    <li className="list-group-item">55000</li>
                                    <li className="list-group-item">i5</li>
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
                                <img src={Dell} alt="dell laptop" width="100%" />
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">Dell Inspiron</li>
                                    <li className="list-group-item">69000</li>
                                    <li className="list-group-item">i7</li>
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
export default Laptops;