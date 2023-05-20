import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import CheckoutForm from "../components/checkOutForm.jsx";
import './pageStyle.css';
import { useLocation } from "react-router-dom"


function Payment() {
  const [stripePromise, setStripePromise] = useState(null);//Stripe authenticstion key
  const [clientSecret, setClientSecret] = useState(""); //Client secret key
  const location = useLocation();
  const item = location.state.item;

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

  // Fetch the client secret from the server and send item price for payment-intent
  useEffect(() => {
    axios.post("/api/v1/create-payment-intent", { price: item.price })
      .then(async (response) => {
        const { clientSecret } = response.data;
        setClientSecret(clientSecret);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  // Render the Stripe payment form
  return (
    <>
      <h1 className="payment_header">Please enter payment information to continue</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }} key={clientSecret}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;