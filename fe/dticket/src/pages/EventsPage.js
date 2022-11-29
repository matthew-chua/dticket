import React from "react"
import Card from "../components/card/Card"
import adele from "../assets/adele.png"
import nba from "../assets/nba.jpg"
import the1975 from "../assets/1975.jpg"
import { Link } from "react-router-dom"

export default function EventsPage() {
	// console.log(window.ethereum.isConnected())
	const DUMMY_DATA = [
		{
			img: adele,
			eventID: "0x123",
			location: "MSG",
			title: "Adele",
			price: "0.03 ETH",
			time: "24 Mar, 18:00"
		},
		{
			img: the1975,
			eventID: "0x1234",
			location: "Greek Theatre",
			title: "The 1975",
			price: "0.05 ETH",
			time: "24 Mar, 18:00"
		},
	]
	const NBA_DUMMY = [
		{
			img: nba,
			eventID: "0x123",
			location: "Chase Centre",
			title: "Warriors V Lakers",
			price: "0.02 ETH",
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
					{NBA_DUMMY.map((event) => (
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
