import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import BoxContainer from "../../components/utilities/BoxContainer";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("search submitted");
    const location = e.target.loaction.value;
    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const cordinate = [district.latitude, district.longitude];
      console.log(cordinate);
      mapRef.current.flyTo(cordinate, 10);
    }
  };

  return (
    <BoxContainer>
      <div>
        <h2 className="text-5xl font-extrabold text-secondary my-10">
          We are available in 64 districts
        </h2>
        <div className="mb-10 w-7xl">
          <form onSubmit={handleSearch} className="join w-full">
            <div className="w-1/3">
              <label className="input join-item w-full">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  type="search"
                  placeholder="search"
                  className="w-full"
                  name="loaction"
                />
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary text-secondary join-item"
            >
              Search
            </button>
          </form>
        </div>
        <div className=" w-full h-[600px] mb-10 rounded-2xl">
          <MapContainer
            center={position}
            zoom={7}
            scrollWheelZoom={false}
            className="h-[600px]"
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {serviceCenters.map((center, i) => (
              <Marker key={i} position={[center.latitude, center.longitude]}>
                <Popup>
                  <strong>{center.district}</strong>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </BoxContainer>
  );
};

export default Coverage;
