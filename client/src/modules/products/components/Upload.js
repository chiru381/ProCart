import React, {useState} from 'react';

let Upload=()=>{
    let [product, setProduct]=useState({
        productName: "",
        price: "",
        qty: "",
        image: "",
        category: "",
        desc: "",
        usage: "",
    });
    let inputHandler=(event)=>{
        setProduct({...product, [event.target.name]:event.target.value});
    };
    let imageHandler=(event)=>{
        let imageFile=event.target.files[0];
        let reader=new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener("load", ()=>{
            if(reader.result){
                setProduct({...product, image: reader.result});
            }
        });
        console.log(imageFile);
    };
    let submitHandler=(event)=>{
        console.log(product, "Testing");
        //dispatch to action with product
        event.preventDefault();
    }
    return(
        <>
        <section className="bg-warning p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Upload Products - By Admin</h3>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h4>Upload Products</h4>
                                <pre>{JSON.stringify(product)}</pre>
                            </div>
                            <div className="card-body">
                            <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <input 
                                   type="text" 
                                   className="form-control" 
                                   placeholder="ProductName" 
                                   onChange={inputHandler} 
                                   name="productName" />
                            </div>
                            <div className="form-group">
                                <input 
                                   type="number" 
                                   className="form-control" 
                                   placeholder="Price" 
                                   onChange={inputHandler} 
                                   name="price" />
                            </div>
                            <div className="form-group">
                                <input 
                                   type="text" 
                                   className="form-control" 
                                   placeholder="QTY" 
                                   onChange={inputHandler} 
                                   name="qty" />
                            </div>
                            <div className="form-group">
                                <input 
                                   type="file" 
                                   className="form-control" 
                                   placeholder="Please Upload Image" 
                                   onChange={imageHandler} 
                                   name="image" />
                            </div>
                            <div className="form-group">
                                <input 
                                   type="text" 
                                   className="form-control" 
                                   placeholder="Category" 
                                   onChange={inputHandler} 
                                   name="category" />
                            </div>
                            <div className="form-group">
                                <textarea  
                                   placeholder="Product Description" 
                                   className="form-control" 
                                   onChange={inputHandler} 
                                   name="desc" ></textarea>
                            </div>
                            <div className="form-group">
                                <textarea 
                                   placeholder="ProductUsage" 
                                   className="form-control" 
                                   onChange={inputHandler} 
                                   name="usage" ></textarea>
                            </div>
                            <div className="form-group">
                                <input 
                                   type="submit" 
                                   className="form-control btn btn-primary" />
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
export default Upload;