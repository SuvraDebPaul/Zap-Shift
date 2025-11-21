import React from "react";
import BoxContainer from "../../components/utilities/BoxContainer";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const Pricing = () => {
  const { register, handleSubmit, control } = useForm();
  const serviceCenters = useLoaderData();
  const regionsDeplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDeplicate)];
  //console.log(regions);
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtByRegion = (region) => {
    const regionDistrict = serviceCenters.filter((r) => r.region === region);
    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };

  const handParcelSubmit = (data) => {
    console.log(data);
  };
  return (
    <BoxContainer>
      <section className="bg-base-100 rounded-2xl mb-4 p-20">
        <h2 className="text-4xl font-extrabold">Add Parcel</h2>
        <form
          className="space-y-5 my-10"
          onSubmit={handleSubmit(handParcelSubmit)}
        >
          <h4 className="text-2xl font-extrabold mb-5">
            Enter your parcel details
          </h4>
          <fieldset className="fieldset flex items-center gap-2 font-semibold text-lg">
            <input
              type="radio"
              name="documentType"
              className="radio border-gray-300 checked:border-[#0AB010] checked:text-[#0AB010] border-4"
              defaultChecked
              value="document"
              {...register("documentType")}
            />
            <label>Documents</label>
            <input
              type="radio"
              name="documentType"
              className="radio ml-4 border-gray-300 checked:border-[#0AB010] checked:text-[#0AB010] border-4"
              value="not-document"
              {...register("documentType")}
            />
            <label>Not-Document</label>
          </fieldset>
          <div className="flex justify-between items-center gap-20">
            <fieldset className="fieldset flex-1">
              <label className="label text-sm">Parcel Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Parcel Name"
                {...register("parcelName")}
              />
            </fieldset>
            <fieldset className="fieldset flex-1">
              <label className="label text-sm">Parcel Weight (Kg)</label>
              <input
                type="number"
                className="input w-full"
                placeholder="Parcel Weight"
                {...register("parcelWeight")}
              />
            </fieldset>
          </div>
          <div className="flex justify-start items-start gap-20">
            <div className="flex-1">
              <label className="label font-semibold text-lg text-secondary">
                Sender Details
              </label>
              <fieldset className="fieldset">
                <label className="label text-sm">Sender Name</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Sender Name"
                  {...register("senderName")}
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-sm">Sender Address</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Sender Address"
                  {...register("senderAddress")}
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-sm">Your Region</label>
                <select
                  defaultValue="Select Your Region"
                  className="select w-full"
                  {...register("senderRegion")}
                >
                  <option disabled={true}>Select Your Region</option>
                  {regions.map((r, i) => {
                    return (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    );
                  })}
                </select>
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-sm">Your District</label>
                <select
                  defaultValue="Select Your District"
                  className="select w-full"
                  {...register("senderDistrict")}
                >
                  <option disabled={true}>Select Your District</option>
                  {districtByRegion(senderRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-sm">Pickup Instruction</label>
                <textarea
                  className="textarea w-full"
                  placeholder="Pickup Instruction"
                  {...register("senderPickup")}
                ></textarea>
              </fieldset>
            </div>
            <div className="flex-1">
              <label className="label font-semibold text-lg text-secondary">
                Receiver Details
              </label>
              <fieldset className="fieldset">
                <label className="label text-sm">Receiver Name</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Receiver Name"
                  {...register("receiverName")}
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-sm">Receiver Address</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Receiver Address"
                  {...register("receiverAddress")}
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-sm">Your Region</label>
                <select
                  defaultValue="Select Your Region"
                  className="select w-full"
                  {...register("receiverRegion")}
                >
                  <option disabled={true}>Select Your Region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-sm">Your District</label>
                <select
                  defaultValue="Select Your District"
                  className="select w-full"
                  {...register("receiverDistrict")}
                >
                  <option disabled={true}>Select Your District</option>
                  {districtByRegion(receiverRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>
              <fieldset className="fieldset">
                <label className="label text-sm">Delivery Instruction</label>
                <textarea
                  className="textarea w-full"
                  placeholder="Delivery Instruction"
                  {...register("receiverDelivery")}
                ></textarea>
              </fieldset>
            </div>
          </div>
          <button type="submit" className="btn btn-primary text-secondary mt-4">
            Proceed to Confirm Booking
          </button>
        </form>
      </section>
    </BoxContainer>
  );
};

export default Pricing;
