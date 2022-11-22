import React from "react"
import CardUser from "../components/card/CardUser"
import adele from "../assets/adele.png"

export default function ProfilePage() {
	const DUMMY_DATA = [
		{
			img: adele,
			location: "Madison Square Garden",
			title: "Adele",
			price: "100",
			time: "24 Mar, 18:00"
		},
		{
			img: adele,
			location: "Madison Square Garden",
			title: "Adele",
			price: "100",
			time: "24 Mar, 18:00"
		},
		{
			img: adele,
			location: "Madison Square Garden",
			title: "Adele",
			price: "100",
			time: "24 Mar, 18:00"
		}
	]
	return (
		<div className="h-screen w-full pt-36 flex flex-col justify-start items-center text-white">
			<div className="w-4/5 pb-24">
				<div className="text-5xl font-bold text-left">Your Events</div>
				<div className="text-3xl font-bold text-left mt-5">Upcoming</div>
				<div className="text-xl text-left mb-4">Get excited for these events!</div>
				<div className="grid grid-cols-3 gap-x-10 text-black">
					{DUMMY_DATA.map((event) => (
						<CardUser
							location={event.location}
							img={event.img}
							title={event.title}
							time={event.time}
							price={event.price}
							to="/profile/ticket"
						/>
					))}
				</div>
				<div className="text-3xl font-bold text-left mt-10">Past</div>
				<div className="text-xl text-left mb-4">Relive some good memories of previous events!</div>
				<div className="grid grid-cols-3 gap-x-10 text-black">
					{DUMMY_DATA.map((event) => (
						<CardUser
							location={event.location}
							img={event.img}
							title={event.title}
							time={event.time}
							price={event.price}
							to="/profile/ticket"
						/>
					))}
				</div>
			</div>
		</div>
	)
}
