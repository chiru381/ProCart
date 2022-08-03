import StripeCheckout from 'react-stripe-checkout'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom'

const KEY = "pk_test_51I5kq8AUfod9HfFltuR9zogyYPQzTmroMXa0x1pBXeRCtbsjZuo9o8MNXqCJHoe2nEnv2yT6UjwxPwdESneTqtqm00KfXT9xp4"

let Pay=()=>{
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate()

    const onToken = (token) => {
        setStripeToken(token)
        console.log(token);
    }

    useEffect(() => {
        const stripeRequest = async() => {
            try {
                const response = await axios.post('http://localhost:5000/api/payment', {
                    tokenId: stripeToken.id,
                    amount: 4500,
                })
                console.log(response.data)
                navigate('/success')
            } catch (error) {
                console.log(error);
            }
        }
        stripeToken && stripeRequest()
    },[stripeToken, navigate])
    return(
        <div
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {stripeToken ? (<span>Processing....</span>) : (
            <StripeCheckout
                 name='procart'
                 image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Dui-CG5_VcIxTHxks0tTiME_1rIvYeIfMA&usqp=CAU'
                 billingAddress
                 shippingAddress
                 description='Your total is $45'
                 amount={4500}
                 token={onToken}
                 stripeKey={KEY}
             >
             <button
                 style={{
                     border: "none",
                     width: 120,
                     borderRadius: 5,
                     padding: '20px',
                     backgroundColor: 'black',
                     color: 'white',
                     fontWeight: '600',
                     cursor: "pointer",
                 }}
             >
                 Pay Now
             </button>
             </StripeCheckout>
            )}
        </div>
    )
}
export default Pay;