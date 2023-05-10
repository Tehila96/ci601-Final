import React from 'react';
import Profile from "../components/profile";
import './pageStyle.css';

import { useState } from 'react';
import UploadWidget from '../components/UploadWidget';

function Closet() {
    const [url, updateUrl] = useState();
    const [error, updateError] = useState();

    function handleOnUpload(error, result, widget) {
        if ( error ) {
          updateError(error);
          widget.close({
            quiet: true
          });
          return;
        }
        updateUrl(result?.info?.secure_url);
      }

    return (
        <>
            <Profile />  

            <UploadWidget onUpload={handleOnUpload}>
          {({ open }) => {
            function handleOnClick(e) {
              e.preventDefault();
              open();
            }
            return (
              <button onClick={handleOnClick}>
                Upload an Image
              </button>
            )
          }}
        </UploadWidget>    
        
        </>
    );
}
export default Closet;