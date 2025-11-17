import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      Error Page 404
      <Link to="/" className="btn btn-primary text-secondary mt-20">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
