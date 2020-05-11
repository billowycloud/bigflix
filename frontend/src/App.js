import React from "react";
import Router from "./Components/Router";
import GlobalStyles from "./Components/Globalstyles";
import { Helmet } from "react-helmet-async";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Bigflix</title>
      </Helmet>
      <GlobalStyles />
      <Router />
    </>
  );
};

export default App;
