import React from 'react';
import Digital from '../../../assets/images/digital.jpg';
import Analog from '../../../assets/images/analog.jpg';
import Redux from '../../../assets/images/redux.jpg';
import Hager from '../../../assets/images/hager.jpg';

let Watches=()=>{
    return(
        <>
        <section className="bg-info">
            <div className="container" style={{color: 'red'}}>
                <div className="row">
                    <div className="col">
                        <h1>Watch Products</h1>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header">
                                <img src={Digital} alt="digital watch" />
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">Digital Watch</li>
                                    <li className="list-group-item">2700</li>
                                    <li className="list-group-item">Good Working...</li>
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
                                <img src={Analog} alt="analog" />
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">Analog Watch</li>
                                    <li className="list-group-item">330</li>
                                    <li className="list-group-item">Good Working...</li>
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
                                <img src={Redux} alt="redux" />
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">Redux</li>
                                    <li className="list-group-item">550</li>
                                    <li className="list-group-item">Good Working...</li>
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
                                <img src={Hager} alt="hager" />
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">Hager Watch</li>
                                    <li className="list-group-item">690</li>
                                    <li className="list-group-item">Good Working</li>
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
export default Watches;