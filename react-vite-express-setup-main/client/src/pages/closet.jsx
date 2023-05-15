import { React } from 'react';
import Profile from "../components/profile";
import './pageStyle.css';

import { useAuth0 } from '@auth0/auth0-react';
import CreateItemForm from '../components/createItemForm';


function Closet() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="closet_container">
    {
      isAuthenticated &&  
      <> 
      <Profile />
      <CreateItemForm />
      </>
    }
    </div>
  );
}
export default Closet;