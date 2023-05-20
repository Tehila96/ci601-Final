import React from 'react';
import LoginButton from "../components/loginButton";
import LogoutButton from "../components/logoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import './pageStyle.css';

export const Account = () => {
const { isLoading, error } = useAuth0();
    return (
        <div className="login_page">
            <div className="login_middel">
            <h1>Welcome to Second Best!</h1>
            {error && <p>Authentication Error</p>}
            {!error && isLoading && <p>Loading...</p>}
            {!error && !isLoading && (
                <>
                    <LoginButton />
                    <LogoutButton />
                </>
            )}
            </div>
        </div>
    )

}
export default Account;