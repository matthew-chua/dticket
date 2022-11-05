import React from "react";
import Card from "../components/card/Card";
import adele from "../assets/adele.png";

export default function EventsPage() {
  const DUMMY_DATA = [
    {
      img: adele,
      location: "Madison Square Garden",
      title: "Adele",
      price: "100",
      time: "24 Mar, 18:00",
    },
    {
      img: adele,
      location: "Madison Square Garden",
      title: "Adele",
      price: "100",
      time: "24 Mar, 18:00",
    },
    {
      img: adele,
      location: "Madison Square Garden",
      title: "Adele",
      price: "100",
      time: "24 Mar, 18:00",
    },
    {
      img: adele,
      location: "Madison Square Garden",
      title: "Adele",
      price: "100",
      time: "24 Mar, 18:00",
    },
  ];
  return (
    <div className="pt-36">
      <h1 className="text-5xl text-left ml-24">Events</h1>
      <div className="text-left ml-24">Look for your favorite events here!</div>
      <h2 className="text-3xl text-left ml-24 mt-8 ">Concerts</h2>
      <div className="grid grid-cols-3 gap-0 justify-items-center	">
        {DUMMY_DATA.map((event) => (
          <Card
            location={event.location}
            img={event.img}
            title={event.title}
            time={event.time}
            price={event.price}
          />
        ))}
      </div>

      <h2 className="text-3xl text-left ml-24 mt-8">NBA</h2>
      <div className="grid grid-cols-3 justify-items-center	">
        {DUMMY_DATA.map((event) => (
          <Card
            location={event.location}
            img={event.img}
            title={event.title}
            time={event.time}
            price={event.price}
          />
        ))}
      </div>
    </div>
  );
}
