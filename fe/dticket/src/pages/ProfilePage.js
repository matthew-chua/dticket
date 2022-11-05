import React from 'react'
import Modal from '../components/modal/Modal'
import Card from '../components/card/Card'
import adele from '../assets/adele.png'

export default function ProfilePage() {
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
    <>
      <div className='h-screen w-full pt-24 flex flex-col text-white'>
        <div className='text-5xl font-bold w-4/5 text-left ml-20'>Your Events</div>

        <div className='text-3xl font-bold w-4/5 text-left mt-5 ml-20'>Upcoming</div>
        <div className='text-xl w-4/5 text-left ml-20'>Get excited for these events!</div>
        <div className="grid grid-cols-3 gap-0 justify-items-center text-black">
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
        <div className='text-3xl font-bold w-4/5 text-left mt-5 ml-20'>Past</div>
        <div className='text-xl w-4/5 text-left ml-20'>Relive some good memories of previous events!</div>
        <div className="grid grid-cols-3 gap-0 justify-items-center text-black">
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
    </>

  )
}
