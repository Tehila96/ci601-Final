import { useAuth0 } from '@auth0/auth0-react';
import './style.css'

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className="profile_details">
                <h2 className=''>Hello {user?.name}!</h2>
                <div className="profile_img">
                {user?.picture && <img src={user.picture} alt={user?.name} />}
                </div>
            </div>
        )
    )
}

export default Profile;