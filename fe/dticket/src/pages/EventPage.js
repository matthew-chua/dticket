import React from "react";
import adele from "../assets/adele.png";

export default function EventPage() {
  const DUMMY_DATA = {
    img: adele,
    eventName: "Rolling in the Deep",
    eventID: "0x123",
    location: "Madison Square Garden",
    title: "Adele",
    price: "100",
    time: "24 Mar, 18:00",
    state: "San Francisco, CA",
  };

  return (
    <div className="pt-24">
      <div className="flex w-full items-center justify-between p-16">
        <div className="w-1/2">
          <h1 className="text-5xl text-left text-white font-bold">
            {DUMMY_DATA.eventName} @ {DUMMY_DATA.location}
          </h1>
          <h2 className="text-white text-left text-3xl mt-4 font-bold">
            {DUMMY_DATA.title}
          </h2>
          <div className="text-left text-white mt-4">
            {DUMMY_DATA.state}
          </div>
        </div>
        <img src={DUMMY_DATA.img} alt="eventImage" />
      </div>
      <div className="bg-white">
        test
      </div>
    </div>
  );
}
