import { useAuth0 } from '@auth0/auth0-react';
import './style.css';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <button className="login" onClick={() => loginWithRedirect()}>
                Sign In
            </button>
        )
    )
}

export default LoginButton;