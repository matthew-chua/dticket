import React from "react"
import { useState } from "react"
import adele from "../assets/adele.png"
import Ticket from "../components/card/Ticket"
import CONTRACTS from "../contracts"
import BuyModal from "../components/modal/BuyModal"

export default function EventPage() {
	const DUMMY_DATA = {
		img: adele,
		eventName: "Rolling in the Deep",
		eventID: "0x123",
		location: "MSG",
		title: "Adele",
		price: "0.00001 ETH",
		time: "24 Mar, 18:00",
		state: "NYC, NY"
	}

	const OG_TICKETS = [
		{
			date: "24th Mar",
			time: "Sat 18:00",
			type: "General Admissions",
			price: "0.00000 ETH"
		}
	]

	const RESALE_TICKETS = [
		{
			date: "24th Mar",
			time: "Sat 18:00",
			type: "General Admissions",
			price: "0.00001 ETH"
		},
	]

	const ACTIVE_STYLE = "cursor-pointer hover:underline mx-4"
	const INACTIVE_STYLE = "text-gray-400 cursor-pointer mx-4 hover:underline "

	const [original, setOriginal] = useState(true)
	const [success, setSuccess] = useState(null)

	return (
		<>
			{success ? (
				<BuyModal isValid={true} onClose={() => setSuccess(null)} />
			) : success === false ? (
				<BuyModal isValid={false} onClose={() => setSuccess(null)} />
			) : null}
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
						OG_TICKETS.map((ticket) => (
							<Ticket
								type="primary"
								contract={CONTRACTS.ADELENFT}
								ticket={ticket}
								key={ticket.date + ticket.time + ticket.price}
								setSuccess={setSuccess}
							/>
						))}
					{!original &&
						RESALE_TICKETS.map((ticket) => (
							<Ticket
								type="secondary"
								contract={CONTRACTS.ADELENFT}
								ticket={ticket}
								key={ticket.date + ticket.time + ticket.price}
								setSuccess={setSuccess}
							/>
						))}
				</div>
			</div>
		</>
	)
}
