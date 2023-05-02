import React from 'react';
import LoginButton from "../components/loginButton";
import LogoutButton from "../components/logoutButton";
import Profile from "../components/profile";
import { useAuth0 } from "@auth0/auth0-react";


export const Account = () => {
const { isLoading, error } = useAuth0();
    return (
        <main className="column">
            <h1>Auth0 Login!</h1>
            {error && <p>Authentication Error</p>}
            {!error && isLoading && <p>Loading...</p>}
            {!error && !isLoading && (
                <>
                    <LoginButton />
                    <LogoutButton />
                    <Profile />
                </>
            )}
        </main>
    )

}
export default Account;