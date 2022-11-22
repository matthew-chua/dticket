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
		}
	]
	return (
		<div className="h-screen w-full pt-36 flex flex-col justify-start items-center">
			<div className="w-4/5">
				<h1 className="text-5xl text-left text-white font-bold">Events</h1>
				<div className="text-left text-white">Look for your favorite events here!</div>
				<h2 className="text-3xl text-left mt-8 text-white font-bold">Concerts</h2>
				<div className="grid grid-cols-3 gap-x-10">
					{DUMMY_DATA.map((event) => (
						<Link to={`/events/${event.eventID}`} key={event.eventID}>
							<Card
								location={event.location}
								img={event.img}
								title={event.title}
								time={event.time}
								price={event.price}
							/>
						</Link>
					))}
				</div>

				<h2 className="text-3xl text-left mt-8 text-white font-bold">NBA</h2>
				<div className="grid grid-cols-3 gap-x-10 mb-24">
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
		</div>
	)
}
