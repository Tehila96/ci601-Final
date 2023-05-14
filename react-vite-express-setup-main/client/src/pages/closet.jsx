import { React } from 'react';
import Profile from "../components/profile";
import './pageStyle.css';

import { useAuth0 } from '@auth0/auth0-react';
import UploadForm from "../components/uploadForm";


function Closet() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
    {
      isAuthenticated &&  
      <> 
      <Profile />
      <UploadForm />
      </>
    }
    </>
  );
}
export default Closet;