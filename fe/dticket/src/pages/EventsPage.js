import React from "react"
import Card from "../components/card/Card"
import adele from "../assets/adele.png"
import { Link } from "react-router-dom"

export default function EventsPage() {
	// console.log(window.ethereum.isConnected())
	const DUMMY_DATA = [
		{
			img: adele,
			eventID: "0x123",
			location: "Madison Square Garden",
			title: "Adele",
			price: "100",
			time: "24 Mar, 18:00"
		},
		{
			img: adele,
			eventID: "0x1234",
			location: "Madison Square Garden",
			title: "Adele",
			price: "100",
			time: "24 Mar, 18:00"
		},
		{
			img: adele,
			eventID: "0x12345",
			location: "Madison Square Garden",
			title: "Adele",
			price: "100",
			time: "24 Mar, 18:00"
		},
		{
			img: adele,
			eventID: "0x123456",
			location: "Madison Square Garden",
			title: "Adele",
			price: "100",
			time: "24 Mar, 18:00"
		}
	]
	return (
		<div className="pt-24">
			<h1 className="text-5xl text-left ml-24 text-white font-bold">Events</h1>
			<div className="text-left ml-24 text-white">Look for your favorite events here!</div>
			<h2 className="text-3xl text-left ml-24 mt-8 text-white font-bold">Concerts</h2>
			<div className="grid grid-cols-3 gap-x-2 justify-items-center	">
				{DUMMY_DATA.map((event) => (
					<Link to={`/events/${event.eventID}`} key={event.eventID}>
						<Card location={event.location} img={event.img} title={event.title} time={event.time} price={event.price} />
					</Link>
				))}
			</div>

			<h2 className="text-3xl text-left ml-24 mt-8 text-white font-bold">NBA</h2>
			<div className="grid grid-cols-3 justify-items-center	">
				{DUMMY_DATA.map((event) => (
					<Card
						key={event.eventID}
						location={event.location}
						img={event.img}
						title={event.title}
						time={event.time}
						price={event.price}
					/>
				))}
			</div>
		</div>
	)
}
