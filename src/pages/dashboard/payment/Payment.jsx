import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../components/utilities/Loader";
import BoxContainer from "../../../components/utilities/BoxContainer";
import useAuth from "../../../hooks/useAuth";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  if (!user) return <Loader></Loader>;
  const handelPayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  };

  if (isLoading) return <Loader></Loader>;

  return (
    <BoxContainer>
      <h2 className="my-10">
        Please Pay $ {parcel.cost} for {parcel.parcelName}
      </h2>

      <button
        onClick={handelPayment}
        className="btn btn-primary text-secondary"
      >
        Pay
      </button>
    </BoxContainer>
  );
};

export default Payment;
