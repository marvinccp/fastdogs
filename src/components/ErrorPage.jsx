import React from 'react'
import { useRouteError  } from 'react-router-dom'
import Header from './Header';


const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
  return (
    <div>
        <Header />
      {/* <h1>oops!!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
      <img src="./assets/images/errorPage.png" alt="" />
    </div>
  );
}

export default ErrorPage