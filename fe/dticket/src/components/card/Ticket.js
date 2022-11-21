import React from "react"
import Button from "../button/Button"
import { ethers } from "ethers"
import ERC721ABI from "../../ABIs/erc721"
import MarketplaceABI from "../../ABIs/marketplace"
import CONTRACTS from "../../contracts"

export default function Ticket(props) {
	const buyTicketHandler = async (e) => {
		e.preventDefault()
		let provider = new ethers.providers.Web3Provider(window.ethereum)
		const signer = provider.getSigner()

		if (props.type === "primary") {
			const new_contract = new ethers.Contract(CONTRACTS.ADELENFT, ERC721ABI, signer)
			let tx = await new_contract.mint()
			console.log("primary marketplace tx", tx)
		} else if (props.type === "secondary") {
			const new_contract = new ethers.Contract(CONTRACTS.MARKETPLACE, MarketplaceABI, signer)
			let tx = await new_contract.buyListing(props.contract)
			console.log("secondary marketplace tx", tx)
		}
	}

	return (
		<div className="flex border-2 rounded-md py-8 px-16 justify-between items-center my-8">
			<div>
				<div className="text-3xl font-bold">{props.ticket.date}</div>
				<div className="text-2xl font-bold">{props.ticket.time}</div>
			</div>
			<div className="text-rose-400 font-bold text-4xl">{props.ticket.type}</div>
			<div className="font-extrabold text-3xl">{props.ticket.price ? props.ticket.price : "SOLD OUT"}</div>
			<Button text="Buy Now!" onClick={buyTicketHandler} disabled={!props.ticket.price} />
		</div>
	)
}
