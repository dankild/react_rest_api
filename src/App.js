import React from "react";

import Navbar     from "./parts/navbar";
import Main       from "./parts/router";
import Footer     from "./parts/footer";

import HttpsRedirect from 'react-https-redirect';

export default function App() {
  
  return (
      <>
        <HttpsRedirect>
          <Navbar /> 
          <Main />
          <Footer />
        </HttpsRedirect>
      </>
  )
}