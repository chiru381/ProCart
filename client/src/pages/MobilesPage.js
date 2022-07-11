// import axios from 'axios';
import React from 'react';
import GoogleLogin from 'react-google-login';

function MobilesPage(){

    const responseSuccessGoogle = (response) => {
      console.log(response, 'checked');
      // axios({
      //   method: "POST",
      //   url: 'http://localhost:5000/user/googlelogin',
      //   data: {tokenId: response.tokenId}
      // }).then((response) => {
      //   console.log("Google login successful", response)
      // })
    }

    const responseErrorGoogle = (response) => {
      // console.log(error, 'unchecked');
    }

    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    //const [mobiles, setMobiles] = useState([]);

    // let [products , setProduct] = useState([]);
 
    // useEffect(()=>{
    //   axios.get("http://localhost:5000/product/mobiles")
    //   .then((res)=>{
    //     setProduct(res.data.product);
    //   }).catch((err)=>{
    //     console.log(err);
    //   })
    // } , [] )


return (
  // <div>
  //   <h1>heading mobile page</h1>
  // </div>

  <div className="mobilePage">
    <div className="col-md-6 offset-md-3 text-center">
      <h1>Login With Google</h1>

      <GoogleLogin
        clientId="814906746267-5f5t8s5k1hhftbueamvqcpnbbega027l.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  </div>

//   <div className="card">
//   <div className="card-header">
//       <h1>card header</h1>
//   </div>
//   <div className="card-body">
//       <ul className="list-group">
//           <li className="list-group-item">Apple Iphone</li>
//           <li className="list-group-item">89000</li>
//           <li className="list-group-item">16gb RAM</li>
//           <li className="list-group-item">
//               <button className="btn btn-success">
//                   Add to Cart
//               </button>
//           </li>
//       </ul>
//   </div>
// </div>
 
  // <div>
  //   {products.map((product,  index) => {
  //     return (
  //       <ul key={index}>
  //         <li>{product.name}</li>
  //       </ul>
  //     )
  //   })}
  // </div> 
  
  // <div>
  //   {
  //     products.map((pro , indux) => {
  //      // console.log(pro) &&
  //       return(
  //         <div key={indux}>{pro.name}</div>
  //       )
  //     })
  //   }
  // </div>
            
  );

}
export default MobilesPage;