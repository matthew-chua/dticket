import React from "react"
import { useState } from "react"
import adele from "../assets/adele.png"
import Ticket from "../components/card/Ticket"
import CONTRACTS from "../contracts"

export default function EventPage() {
	const DUMMY_DATA = {
		img: adele,
		eventName: "Rolling in the Deep",
		eventID: "0x123",
		location: "Madison Square Garden",
		title: "Adele",
		price: "100",
		time: "24 Mar, 18:00",
		state: "San Francisco, CA"
	}

	const OG_TICKETS = [
		{
			date: "17th Oct",
			time: "Sat 7:00pm",
			type: "General Admissions",
			price: "0.02 ETH"
		},
		{
			date: "17th Oct",
			time: "Sat 7:00pm",
			type: "General Admissions",
			price: null
		}
	]

	const RESALE_TICKETS = [
		{
			date: "18th Oct",
			time: "Sat 7:00pm",
			type: "General Admissions",
			price: "0.04 ETH"
		},
		{
			date: "18th Oct",
			time: "Sat 7:00pm",
			type: "General Admissions",
			price: null
		}
	]

	const ACTIVE_STYLE = "cursor-pointer hover:underline mx-4"
	const INACTIVE_STYLE = "text-gray-400 cursor-pointer mx-4 hover:underline "

	const [original, setOriginal] = useState(true)

	return (
		<div className="pt-24">
			<div className="flex w-full items-center justify-between p-16">
				<div className="w-1/2">
					<h1 className="text-5xl text-left text-white font-bold">
						{DUMMY_DATA.eventName} @ {DUMMY_DATA.location}
					</h1>
					<h2 className="text-white text-left text-3xl mt-4 font-bold">{DUMMY_DATA.title}</h2>
					<div className="text-left text-white mt-4">{DUMMY_DATA.state}</div>
				</div>
				<img src={DUMMY_DATA.img} alt="eventImage" />
			</div>
			<div className="bg-white px-12 py-4">
				<div className="flex ml-16 text-rose-400 font-bold text-3xl">
					<div
						className={original ? ACTIVE_STYLE : INACTIVE_STYLE}
						onClick={() => {
							setOriginal(true)
						}}>
						Original
					</div>
					<div
						className={!original ? ACTIVE_STYLE : INACTIVE_STYLE}
						onClick={() => {
							setOriginal(false)
						}}>
						Resale
					</div>
				</div>
				{original &&
					OG_TICKETS.map((ticket) => <Ticket type="primary" contract={CONTRACTS.ADELENFT} ticket={ticket} />)}
				{!original &&
					RESALE_TICKETS.map((ticket) => <Ticket type="secondary" contract={CONTRACTS.ADELENFT} ticket={ticket} />)}
			</div>
		</div>
	)
}
