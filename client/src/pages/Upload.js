import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { uploadProductAction } from "../redux/products/product.action";

let Upload = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [product, setProduct] = useState({
    name: "",
    brand: "",
    image: "image one",
    price: "",
    qty: "",
    category: "",
    desc: "",
    usage: "",
  });
  let inputHandler = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  let imageHandler = (event) => {
    console.log("image handler");
    let imageFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.addEventListener("load", () => {
      if (reader.result) {
        setProduct({ ...product, image: reader.result });
      }
    });
    console.log(imageFile);
  };
  let submitHandler = (event) => {
    event.preventDefault();
    dispatch(uploadProductAction(product, navigate));
  };
  return (
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
      <pre>{JSON.stringify(product)}</pre>
      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <h4>Upload Products</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Product Name"
                        onChange={inputHandler}
                        value={product.name}
                        name="name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Brand Name"
                        onChange={inputHandler}
                        value={product.brand}
                        name="brand"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Price"
                        onChange={inputHandler}
                        value={product.price}
                        name="price"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="QTY"
                        onChange={inputHandler}
                        value={product.qty}
                        name="qty"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control"
                        placeholder="Product Image"
                        onChange={imageHandler}
                        name="image"
                      />
                    </div>
                    <div className="form-group">
                      <select
                        className="form-control"
                        name="category"
                        onChange={inputHandler}
                      >
                        <option value="">Select Category</option>
                        <option value="mobiles">Mobiles</option>
                        <option value="laptops">Laptops</option>
                        <option value="watches">Watches</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <textarea
                        placeholder="Product Description"
                        className="form-control"
                        onChange={inputHandler}
                        value={product.desc}
                        name="desc"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <textarea
                        placeholder="ProductUsage"
                        className="form-control"
                        onChange={inputHandler}
                        value={product.usage}
                        name="usage"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="form-control btn btn-primary"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Upload;
