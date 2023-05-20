import { useNavigate } from "react-router-dom";
import './payment.css'

function PaymentConfirm() {

    const navigate = useNavigate()
    function NavigateHome() {
        navigate('/Home')
    }
    return (
        <>
            <h1 className="payment_header">transaction confirmed <br/> Thank you for buying from second best!!</h1>
            <div>
                <button className="center_botton" onClick={NavigateHome}>Return home</button>
            </div>
        </>
    );
}

export default PaymentConfirm;
