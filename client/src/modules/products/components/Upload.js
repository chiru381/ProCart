import React, {useState} from 'react';

let Upload=()=>{
    let [product, setProduct]=useState({
        productName: "",
        price: "",
        qty: "",
        file: "",
        avail: "",
        desc: "",
        usage: "",
    });
    let inputHandler=(event)=>{
        setProduct({...product, [event.target.name]:event.target.value});
    };
    return(
        <>
        <section></section>
        <section>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="ProductName" onChange={inputHandler} name="productName" />
                            </div>
                            <div className="form-group">
                                <input type="number" className="form-control" placeholder="Price" onChange={inputHandler} name="price" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="QTY" onChange={inputHandler} name="qty" />
                            </div>
                            <div className="form-group">
                                <input type="file" className="form-control" placeholder="Please Upload Image" onChange={inputHandler} name="image" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Available" onChange={inputHandler} name="avail" />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Product Description" className="form-control" onChange={inputHandler} name="desc" ></textarea>
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Usage" className="form-control" onChange={inputHandler} name="usage" ></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="form-control btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Upload;