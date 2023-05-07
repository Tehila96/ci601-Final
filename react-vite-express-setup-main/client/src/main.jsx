import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const cloudName= import.meta.env.VITE_CLOUDINARY_CLOUD_NAME="dzjnv3mlr";
const uploadPreset= import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET="wx6wkclk";
const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log('domain: ', domain);
// console.log('clientId: ', clientId);

root.render(
  <React.StrictMode>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
  </React.StrictMode>
);
