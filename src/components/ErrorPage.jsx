import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "./Header";
import '../styles/Header.css'

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="errorPage">
      <Header />
      {/* <img src="./assets/images/errorPage.png" alt="" /> */}
    </div>
  );
};

export default ErrorPage;
