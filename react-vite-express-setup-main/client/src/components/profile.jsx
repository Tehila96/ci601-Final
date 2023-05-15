import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className="profile_details">
                <h2>Hello {user?.name}!</h2>
                {user?.picture && <img src={user.picture} alt={user?.name} />}
            </div>
        )
    )
}

export default Profile;