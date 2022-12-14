import React, { useState, useEffect } from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import {Link, useHistory} from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';



function Payment() {
    const [{basket, user }, dispatch] = useStateValue();

    const history = useHistory();


    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded ] = useState(false);
    const [processing, setProcessing ] = useState("");
    const [error, setError ] = useState(null);
    const [disabled, setDisabled ] = useState(true);
    const [clientSecret, setClientSecret ] = useState(true);

    // for the stripe Payment
    useEffect(()=>{
        // generate the special cleint secret to charge customer order
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post', 
                // stripe expect the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
              
        }
        getClientSecret();

    },[basket])

    console.log('THE SECRET IS >>>>', clientSecret)

    const handleSubmit = async (event) => {
        //do all the stripe stuff
          event.preventDefault();
          setProcessing(true); 

         const payload = await stripe.confirmCardPayment(clientSecret, {
             payment_method: {
               card: elements.getElement(CardElement)  
             }
         })
         .then(({ paymentIntent }) =>{
            //paymentIntent = the payment confirmation 

            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
               basket: basket, 
               amount: paymentIntent.amount,
               created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            }) 

            history.replace('./orders')
         })
         
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }

    return (
        <div className='payment'>
            <div className="payment__container">
                
                <h1>Checkout (<Link to="/checkout">{basket?.length} items
                </Link>)
                </h1>
                {/* payment section-- delivery address */}
                <div className="payment__section">
                   <div className="payment__title">
                       <h3>Delivery Address</h3>
                    </div> 
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 Bauchi Lane</p>
                        <p>Lagos, Nigeria</p>
                    </div>
                </div>
                {/* payment section--- review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Item and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct 
                            id ={item.id}
                            title ={item.title}
                            image ={item.image}
                            price ={item.price}
                            rating ={item.rating}
                            />
                        ))}
                    </div>


                 </div>
                      {/* payment section --- payment method */}
                    <div className="payment__section">
                            <div className="payment__title">
                                <h3>Payment Method</h3>
                            </div>
                  
                        <div className="payment__details">
                            {/*Stripe magic will go  */}
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />

                                <div className="payment__priceContainer">
                                    <CurrencyFormat
                                    renderText={(value)=>(
                                        <>
                                        <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeperator={true}
                                    prefix={"$"} 

                                    />
                                    <button  disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                    {/* error */}
                                   { error && <div>{error}</div>}
                                </div>
                            </form>
                        </div>
                   </div> 
            </div>
        </div>
    )
}

export default Payment
