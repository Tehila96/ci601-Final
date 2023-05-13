import { React } from 'react';
import Profile from "../components/profile";
import UploadForm from "../components/uploadForm";
import { useAuth0 } from '@auth0/auth0-react';
import './pageStyle.css';

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