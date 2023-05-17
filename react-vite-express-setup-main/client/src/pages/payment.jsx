import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import CheckoutForm from "../components/checkOutForm.jsx";
import './pageStyle.css';


function Payment() {
    const [stripePromise, setStripePromise] = useState(null);//Stripe authenticstion key
    const [clientSecret, setClientSecret] = useState(""); //Client secret key
  
    // Fetch the publishable key from the server
    useEffect(() => {
      axios.get("/api/v1/config")
        .then(async (response) => {
          const { publishableKey } = await response.data;
          setStripePromise(loadStripe(publishableKey));
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }, []);
  
    // Fetch the client secret from the server
    useEffect(() => {
      axios.post("/api/v1/create-payment-intent", {})
        .then(async (response) => {
          const { clientSecret } = response.data
          setClientSecret(clientSecret);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }, []);
  
    // Render the Stripe payment form
    return (
      <>
        <h1 className="payment_header">React Stripe and the Payment Element</h1>
        {clientSecret && stripePromise && (
          <Elements stripe={stripePromise} options={{ clientSecret }} key={clientSecret}>
            <CheckoutForm />
          </Elements>
        )}
      </>
    );
  }
  
  export default Payment;