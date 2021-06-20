import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLaptopAction } from '../../../redux/products/product.action';
import Hp15 from '../../../assets/images/hp15.jpg';
import Lenovo from '../../../assets/images/lenovo.jpg';
import Acer from '../../../assets/images/acer.jpg';
import Dell from '../../../assets/images/dell.jpg';

let Laptops=()=>{
    let dispatch = useDispatch();
    //how to read redux store
    let products = useSelector((state) => {
        return state.product;
    });
    let { product } = products;

    useEffect(()=>{
        dispatch(getLaptopAction());
    }, [dispatch]);
    return(
        <>
      <section className="bg-warning p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Trending Laptops</h3>
              <pre>{JSON.stringify(product)}</pre>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container m-4">
          <div className="row">
          
            {product.product.map((singleProduct, index) => {
              return (
                <div className="col-md-3">
                  <div className="card">
                    <div className="card-header">
                      <img
                        src={singleProduct.image}
                        alt="Oppo Laptop"
                        height="50%"
                        width="50%"
                      />
                    </div>
                    <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item"></li>
                        <li className="list-group-item">25000</li>
                        <li className="list-group-item">
                          <button className="btn btn-success">
                            Add to Cart
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
        </>
    )
}
export default Laptops;