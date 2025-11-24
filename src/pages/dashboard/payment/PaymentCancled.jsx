import React from "react";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";

const PaymentCancled = () => {
  const { user } = useAuth();
  if (!user) return <Loader></Loader>;
  return (
    <div>
      <h2 className="text-4xl">Payment is Calcled Please Try Again</h2>

      <Link
        className="btn btn-primary text-secondary"
        to="/dashboard/my-parcels"
      >
        Try Again
      </Link>
    </div>
  );
};

export default PaymentCancled;
