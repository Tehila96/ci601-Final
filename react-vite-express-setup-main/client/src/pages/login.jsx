import React from 'react';
import LoginButton from "../components/loginButton";
import LogoutButton from "../components/logoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import './pageStyle.css';

export const Account = () => {
const { isLoading, error } = useAuth0();
    return (
        <main>
            <div className="middel">
            <h1>Welcome Back!</h1>
            {error && <p>Authentication Error</p>}
            {!error && isLoading && <p>Loading...</p>}
            {!error && !isLoading && (
                <>
                    <LoginButton />
                    <LogoutButton />
                </>
            )}
            </div>
        </main>
    )

}
export default Account;